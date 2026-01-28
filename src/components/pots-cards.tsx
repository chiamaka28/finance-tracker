import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheveronRight, PotsIcon } from '@/lib/icons';
import Link from 'next/link';

export default function Pots() {
  return (
    <div>
      <Card>
        <CardHeader className="flex items-center justify-between">
          <h3>Pots</h3>
          <Link href="/dashboard/pots" className="flex items-center gap-3.5">
            See Details
            <CheveronRight />
          </Link>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-5">
            <div>
              <PotsIcon />
            </div>
            <div>
              <p>Total Saved</p>
              <p>$850</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 rounded-md bg-green-400"></div>
              <div>
                <p>Saving</p>
                <p>$159</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-cyan h-8 w-1 rounded-md"></div>
              <div>
                <p>Gift</p>
                <p>$40</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-navy h-8 w-1 rounded-md"></div>
              <div>
                <p>Concert Ticket</p>
                <p>$110</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-yellow h-8 w-1 rounded-md"></div>
              <div>
                <p>New Laptop</p>
                <p>$10</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
