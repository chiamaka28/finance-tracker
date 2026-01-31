import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { CheveronRight } from '@/lib/icons';

export default function TransactionCard() {
  return (
    <div className="md:col-span-3">
      <Card className="mb-5 bg-white ring-0 sm:py-6 md:py-4">
        <CardHeader className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Transactions</h3>
          <Link
            href="/dashboard/transactions"
            className="flex items-center gap-3.5 text-gray-300"
          >
            View All
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border-2 bg-gray-200" />
                  <div>
                    <p className="text-base font-bold text-gray-900">
                      {item.name}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`text-base font-bold ${item.amount.startsWith('-') ? 'text-gray-900' : 'text-green-400'}`}
                  >
                    {item.amount}
                  </p>
                  <p className="text-sm font-semibold text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const items = [
  {
    avatar: '',
    name: 'Emma Richardson',
    amount: '+$75.506',
    date: '19 Aug 2024',
  },
  {
    avatar: '',
    name: 'Savory Bites Bistro',
    amount: '-$55.50',
    date: '19 Aug 2024',
  },
  {
    avatar: '',
    name: 'Daniel Carter',
    amount: ' -$42.30',
    date: '18 Aug 2024',
  },
  {
    avatar: '',
    name: 'Sun Park',
    amount: '+$120.00',
    date: '17 Aug 2024',
  },
  {
    avatar: '',
    name: 'Urban Services Hub',
    amount: '-$65.00',
    date: '17 Aug 2024',
  },
];
