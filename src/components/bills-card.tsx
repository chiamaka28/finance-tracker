import Link from 'next/link';
import { Card, CardContent, CardHeader } from './ui/card';
import { CheveronRight } from '@/lib/icons';
export default function BillsCard() {
  return (
    <div className="md:col-span-2">
      <Card className="bg-white py-6 ring-0">
        <CardHeader className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Recurring Bills</h3>
          <Link
            href="/dashboard/bills"
            className="flex items-center gap-3.5 text-gray-300"
          >
            See Details
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3.5">
            <div className="bg-beige-100 flex h-16 items-center justify-between rounded-md border-l-5 border-green-400 px-3">
              <p className="text-base text-gray-300">Electricity</p>
              <p className="text-base font-bold text-gray-900">$159</p>
            </div>
            <div className="bg-beige-100 border-cyan flex h-16 items-center justify-between rounded-md border-l-5 px-3">
              <p className="text-base text-gray-300">Internet</p>
              <p className="text-base font-bold text-gray-900">$40</p>
            </div>
            <div className="bg-beige-100 border-cyan flex h-16 items-center justify-between rounded-md border-l-5 px-3">
              <p className="text-base text-gray-300">Water</p>
              <p className="text-base font-bold text-gray-900">$110</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
