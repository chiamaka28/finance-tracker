import Link from 'next/link';
import { Card, CardContent, CardHeader } from './ui/card';
import { CheveronRight } from '@/lib/icons';
export default function BillsCard() {
  return (
    <div>
      <Card className="bg-white">
        <CardHeader className="flex items-center justify-between">
          <h3>Recurring Bills</h3>
          <Link href="/dashboard/bills" className="flex items-center gap-3.5">
            See Details
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent>
          <div>
            <div className="bg-beige-100 flex items-center justify-between rounded-md border-l-2 border-green-400">
              <p>Electricity</p>
              <p>$159</p>
            </div>
            <div className="bg-beige-100 border-cyan flex items-center justify-between rounded-md border-l-2">
              <p>Internet</p>
              <p>$40</p>
            </div>
            <div className="bg-beige-100 border-cyan flex items-center justify-between rounded-md border-l-2">
              <p>Water</p>
              <p>$110</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
