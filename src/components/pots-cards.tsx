import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheveronRight, PotsIcon } from '@/lib/icons';
import Link from 'next/link';

export default function Pots() {
  return (
    <div className="col-span-3">
      <Card className="mb-5 bg-white ring-0">
        <CardHeader className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Pots</h3>
          <Link
            href="/dashboard/pots"
            className="flex items-center gap-3.5 text-gray-300"
          >
            See Details
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent className="sm:flex sm:items-center">
          <div className="bg-beige-100 mb-4 flex w-full items-center gap-5 rounded-lg p-6 sm:max-w-61.75">
            <div>
              <PotsIcon />
            </div>
            <div className="flex flex-col gap-2">
              <p>Total Saved</p>
              <p className="text-2xl font-bold text-gray-900">$850</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-2 sm:items-center sm:gap-x-9 sm:gap-y-0">
            <div className="flex items-center gap-2">
              <div className="h-10 w-1 rounded-md bg-green-400"></div>
              <div>
                <p className="text-gray-300">Saving</p>
                <p className="text-[17px] font-bold text-gray-900">$159</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-cyan h-10 w-1 rounded-md"></div>
              <div>
                <p className="text-gray-300">Gift</p>
                <p className="text-[17px] font-bold text-gray-900">$40</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-navy h-10 w-1 rounded-md"></div>
              <div>
                <p className="text-gray-300">Concert Ticket</p>
                <p className="text-[17px] font-bold text-gray-900">$110</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow h-10 w-1 rounded-md"></div>
              <div>
                <p className="text-gray-300">New Laptop</p>
                <p className="text-[17px] font-bold text-gray-900">$10</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
