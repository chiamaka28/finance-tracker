'use client';

import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

export const description = 'A donut chart with text';

const chartData = [
  { item: 'Entertainment', amount: 25, max: 50, fill: '#277C78' },
  { item: 'Bills', amount: 250, max: 750, fill: '#82C9D7' },
  { item: 'Dinning Out', amount: 67, max: 75, fill: '#F2CDAC' },
  { item: 'Personal Care', amount: 67, max: 100, fill: '#626070' },
];

const chartConfig = {
  amount: {
    label: 'Amount',
  },
  Entertainment: {
    label: 'Entertainment',
    color: '#277C78',
  },
  Bills: {
    label: 'Bills',
    color: '#82C9D7',
  },
  DinningOut: {
    label: 'Dinning Out',
    color: '#F2CDAC',
  },
  PersonalCare: {
    label: 'Personal Care',
    color: '#626070',
  },
} satisfies ChartConfig;

export default function BudgetChart() {
  const { totalAmount, maxAmount } = React.useMemo(() => {
    return chartData.reduce(
      (acc, curr) => ({
        totalAmount: acc.totalAmount + curr.amount,
        maxAmount: acc.maxAmount + curr.max,
      }),
      { totalAmount: 0, maxAmount: 0 }
    );
  }, []);
  return (
    <Card className="flex flex-col bg-transparent p-0 ring-0">
      <CardHeader className="items-center pb-0"></CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[230px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="item"
              innerRadius={60}
              outerRadius={90}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <>
                        <circle
                          cx={viewBox.cx}
                          cy={viewBox.cy}
                          r={62}
                          fill="none"
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth={10}
                        />
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            ${totalAmount.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            of ${maxAmount.toLocaleString()} limit
                          </tspan>
                        </text>
                      </>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
