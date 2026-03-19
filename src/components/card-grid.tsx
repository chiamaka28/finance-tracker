import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CardGrid() {
  return (
    <div>
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6 lg:grid-cols-3 @md:grid-cols-1 @3xl:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.title}
            className={`${item.bg} h-30 gap-3 rounded-xl border-none p-5 shadow-none ring-0 sm:p-6`}
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
