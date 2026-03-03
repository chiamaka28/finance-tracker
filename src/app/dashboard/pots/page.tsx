import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Ellipsis } from '@/lib/icons';

export default function PotsPage() {
  const colorMap: Record<string, string> = {
    'bg-green-400': '[&>div]:bg-green-400',
    'bg-gray-500': '[&>div]:bg-gray-500',
    'bg-cyan': '[&>div]:bg-cyan',
    'bg-yellow': '[&>div]:bg-yellow',
    'bg-purple': '[&>div]:bg-purple',
  };
  return (
    <div className="bg-beige-100 min-h-screen p-7 md:px-10">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold">Pots</h1>
        <Button className="bg-gray-900 text-white">+ Add New Pot</Button>
      </div>
      <div className="mt-6 gap-6 md:grid md:grid-cols-2">
        {data.map((pot) => (
          <Card key={pot.id} className="mb-5 bg-white ring-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-900">
                <div className={`h-3 w-3 rounded-full ${pot.color}`}></div>
                {pot.name}
                <Button variant="ghost" className="ml-auto">
                  <Ellipsis className="h-5 w-5" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-1.5 flex items-start justify-between">
                <p className="text-gray-300">Total Saved</p>
                <p className="text-3xl font-bold text-gray-900">{pot.amount}</p>
              </div>
              <Progress
                className={`bg-beige-100 ${colorMap[pot.color]} h-2 w-full rounded-xl`}
                value={pot.progress}
              />
              <div className="mt-1.5 flex items-center justify-between text-gray-300">
                <p className="text-[13px] font-bold">{pot.progress}%</p>
                <p className="text-[13px]">Target of ${pot.target}</p>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <Button className="bg-beige-100 h-13 w-full flex-1/2 text-base font-bold text-gray-900">
                  + Add Money
                </Button>
                <Button className="bg-beige-100 h-13 w-full flex-1/2 text-base font-bold text-gray-900">
                  Withdraw
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    color: 'bg-green-400',
    name: 'Savings',
    amount: '$159.00',
    target: '200.00',
    progress: 75,
  },
  {
    id: 2,
    color: 'bg-gray-500',
    name: 'Concert Tickets',
    amount: '$100.00',
    target: '200.00',
    progress: 50,
  },
  {
    id: 3,
    color: 'bg-cyan',
    name: 'Gift',
    amount: '$40.00',
    target: '60.00',
    progress: 66.6,
  },
  {
    id: 4,
    color: 'bg-yellow',
    name: 'New Laptop',
    amount: '$10.00',
    target: '1000.00',
    progress: 1,
  },
  {
    id: 5,
    color: 'bg-purple',
    name: 'Vacation',
    amount: '$531.00',
    target: '1440.00',
    progress: 36.8,
  },
];
