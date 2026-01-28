import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { CheveronRight } from '@/lib/icons';

export default function TransactionCard() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <h3>Pots</h3>
          <Link
            href="/dashboard/transactions"
            className="flex items-center gap-3.5"
          >
            View All
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl border-2 border-dashed bg-gray-200" />
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-medium ${item.amount.startsWith('-') ? 'text-gray-900' : 'text-green-400'}`}
                  >
                    {item.amount}
                  </p>
                  <p className="text-sm text-gray-500">{item.date}</p>
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
