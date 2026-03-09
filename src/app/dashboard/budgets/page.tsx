'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BudgetChart from '@/app/dashboard/budgets/components/budget-chart';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';
import { Progress } from '@/components/ui/progress';
import { CheveronRight } from '@/lib/icons';
import { Ellipsis } from 'lucide-react';
import { useDialogStore } from '@/stores/dialog-store';
import { CreateBudgetDialog } from './components/create-budget-dialog';
import { EditBudgetDialog } from './components/edit-budget-dialog';

export default function BudgetsPage() {
  const { OpenCreateBudgetDialog } = useDialogStore();
  const { OpenEditBudgetDialog } = useDialogStore();
  const colorMap: Record<string, string> = {
    'bg-green-400': '[&>div]:bg-green-400',
    'bg-cyan': '[&>div]:bg-cyan',
    'bg-yellow': '[&>div]:bg-yellow',
  };
  return (
    <div className="bg-beige-100 @container min-h-screen p-7 md:px-10">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold">Budgets</h1>
        <Button
          className="bg-gray-900 text-white"
          onClick={OpenCreateBudgetDialog}
        >
          + Add New Budget
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 @xl:grid-cols-2">
        <div>
          <Card className="mb-6 bg-white ring-0">
            <CardContent>
              <BudgetChart />
              <h3>Spending Summary</h3>
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 pt-3 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-cyan h-7 w-1 rounded-md"></div>
                    <p className="text-base text-gray-300">Bills</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    $250.00
                    <span className="text-sm font-normal text-gray-300">
                      of $750.00
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pt-3 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow h-7 w-1 rounded-md"></div>
                    <p className="text-base text-gray-300">Dining Out</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    $67.00{' '}
                    <span className="text-sm font-normal text-gray-300">
                      of $75.00
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pt-3 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-navy h-7 w-1 rounded-md"></div>
                    <p className="text-base text-gray-300">Personal Care</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    $67.00{' '}
                    <span className="text-sm font-normal text-gray-300">
                      of $100.00
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-1 rounded-md bg-green-400"></div>
                    <p className="text-base text-gray-300">Entertainment</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    $25.00{' '}
                    <span className="text-sm font-normal text-gray-300">
                      of $50.00
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          {data.map((item) => (
            <Card key={item.id} className="mb-4 bg-white ring-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${item.color}`}></div>
                    {item.name}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="ml-auto">
                        <Ellipsis className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-26 bg-white ring-0">
                      <DropdownMenuItem
                        className="cursor-pointer text-sm text-gray-900"
                        onClick={OpenEditBudgetDialog}
                      >
                        Edit Budget
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red cursor-pointer text-sm">
                        Delete Budget
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p>Maximum of {item.max}</p>
                </div>
                <Progress
                  className={`bg-beige-100 ${colorMap[item.color]} my-2 h-8 w-full rounded-lg`}
                  value={
                    (item.spent / parseFloat(item.max.replace('$', ''))) * 100
                  }
                />
                <div className="mt-4 grid grid-cols-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10.75 w-1 rounded-md ${item.color}`}
                    ></div>
                    <div>
                      <p>Spent</p>
                      <p className="text-base text-gray-300">${item.spent}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-beige-100 h-10.75 w-1 rounded-md"></div>
                    <div>
                      <p>Free</p>
                      <p className="text-base text-gray-300">${item.spent}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-beige-100 mt-4 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <p>Latest Spending</p>
                    <Button
                      variant="outline"
                      className="bg-beige-100 mt-2 border-0 shadow-none"
                    >
                      See All <CheveronRight className="h-2 w-2" />
                    </Button>
                  </div>
                  {item.spendings.map((spending, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-gray-300 py-2 not-last:border-b"
                    >
                      <div>
                        <p className="text-sm font-medium">{spending.name}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold">{spending.amount}</p>
                        <p className="text-xs text-gray-300">{spending.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <CreateBudgetDialog />
      <EditBudgetDialog />
    </div>
  );
}

const data = [
  {
    id: 1,
    color: 'bg-green-400',
    name: 'Entertainment',
    max: '$50.00',
    spent: 25.0,
    spendings: [
      {
        name: 'Charlie Electric Company',
        amount: '-$100.00',
        date: '1 Aug 2024',
      },
      {
        name: 'Foxtrot Waterline',
        amount: '-$100.00',
        date: '1 Aug 2024',
      },
      {
        name: 'Tango Gas Company',
        amount: '-$50.00',
        date: '1 Aug 2024',
      },
    ],
  },
  {
    id: 2,
    color: 'bg-cyan',
    name: 'Bills',
    max: '$750.00',
    spent: 250.0,
    spendings: [
      {
        name: 'Lima Dining House',
        amount: '-$30.00',
        date: '21 Aug 2024',
      },
      {
        name: 'Yuna Kim',
        amount: '-$21.50',
        date: '20 Aug 2024',
      },
      {
        name: 'Juliet Restaurant',
        amount: '-$15.50',
        date: '12 Aug 2024',
      },
    ],
  },
  {
    id: 3,
    color: 'bg-yellow',
    name: 'Dining Out',
    max: '$60.00',
    spent: 40.0,
    spendings: [
      {
        name: 'Bravo Zen Spa',
        amount: '-$25.00',
        date: '29 Aug 2024',
      },
      {
        name: 'Sofia Peterson',
        amount: '-$15.00',
        date: '15 Aug 2024',
      },
      {
        name: 'Bravo Zen Spa',
        amount: '-$25.00',
        date: '13 Aug 2024',
      },
    ],
  },
];
