import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CardGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.title}
            className={`${item.bg} h-30 rounded-xl border-none p-4 shadow-none ring-0`}
          >
            <CardHeader>
              <CardTitle className={`${item.color} text-base font-semibold`}>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`${item.color} text-3xl font-bold`}>
                {item.amount}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: 'Current Balance',
    amount: '$5,750.20',
    bg: 'bg-black',
    color: 'text-white',
  },
  {
    title: 'Income',
    amount: '$12,430.50',
    bg: 'bg-white',
    color: 'text-black',
  },
  {
    title: 'Expenses',
    amount: '$6,680.30',
    bg: 'bg-white',
    color: 'text-black',
  },
];
