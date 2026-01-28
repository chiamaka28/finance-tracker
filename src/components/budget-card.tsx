import Link from 'next/link';
import { Card, CardContent, CardHeader } from './ui/card';
import { CheveronRight } from '@/lib/icons';
export default function BudgetCard() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <h3>Budgets</h3>
          <Link href="/dashboard/budgets" className="flex items-center gap-3.5">
            See Details
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 rounded-md bg-green-400"></div>
              <div>
                <p>Entertainment</p>
                <p>$159</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-cyan h-8 w-1 rounded-md"></div>
              <div>
                <p>Bills</p>
                <p>$40</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-navy h-8 w-1 rounded-md"></div>
              <div>
                <p>Dinning Out</p>
                <p>$110</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow h-8 w-1 rounded-md"></div>
              <div>
                <p>Personal Care</p>
                <p>$10</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
