import Link from 'next/link';
import { Card, CardContent, CardHeader } from './ui/card';
import { CheveronRight } from '@/lib/icons';
export default function BudgetCard() {
  return (
    <div className="col-span-2">
      <Card className="mb-5 bg-white ring-0">
        <CardHeader className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Budgets</h3>
          <Link
            href="/dashboard/budgets"
            className="flex items-center gap-3.5 text-gray-300"
          >
            See Details
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-1 rounded-md bg-green-400"></div>
              <div>
                <p className="text-gray-300">Entertainment</p>
                <p className="text-[17px] font-bold text-gray-900">$159</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-cyan h-10 w-1 rounded-md"></div>
              <div>
                <p className="text-gray-300">Bills</p>
                <p className="text-[17px] font-bold text-gray-900">$40</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-navy h-10 w-1 rounded-md"></div>
              <div>
                <p className="text-gray-300">Dinning Out</p>
                <p className="text-[17px] font-bold text-gray-900">$110</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow h-10 w-1 rounded-md"></div>
              <div>
                <p className="text-gray-300">Personal Care</p>
                <p className="text-[17px] font-bold text-gray-900">$10</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
