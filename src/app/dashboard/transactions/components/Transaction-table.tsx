import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { SearchIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';

const items = [
  {
    id: 1,
    avatar: '',
    name: 'Emma Richardson',
    category: 'Personal Care',
    amount: '+$75.506',
    date: '19 Aug 2024',
  },
  {
    id: 2,
    avatar: '',
    name: 'Savory Bites Bistro',
    category: 'Bills',
    amount: '-$55.50',
    date: '19 Aug 2024',
  },
  {
    id: 3,
    avatar: '',
    name: 'Daniel Carter',
    category: 'General',
    amount: ' -$42.30',
    date: '18 Aug 2024',
  },
  {
    id: 4,
    avatar: '',
    name: 'Sun Park',
    category: 'Lifestyle',
    amount: '+$120.00',
    date: '17 Aug 2024',
  },
  {
    id: 5,
    avatar: '',
    name: 'Urban Services Hub',
    category: 'Bills',
    amount: '-$65.00',
    date: '17 Aug 2024',
  },
  {
    id: 6,
    avatar: '',
    name: 'Daniel Carter',
    category: 'General',
    amount: ' -$42.30',
    date: '18 Aug 2024',
  },
  {
    id: 7,
    avatar: '',
    name: 'Sun Park',
    category: 'Lifestyle',
    amount: '+$120.00',
    date: '17 Aug 2024',
  },
  {
    id: 8,
    avatar: '',
    name: 'Urban Services Hub',
    category: 'Bills',
    amount: '-$65.00',
    date: '17 Aug 2024',
  },
  {
    id: 9,
    avatar: '',
    name: 'Sun Park',
    category: 'Lifestyle',
    amount: '+$120.00',
    date: '17 Aug 2024',
  },
  {
    id: 10,
    avatar: '',
    name: 'Urban Services Hub',
    category: 'Bills',
    amount: '-$65.00',
    date: '17 Aug 2024',
  },
];

export default function TransactionTable() {
  return (
    <div className="overflow-hidden rounded-lg bg-white p-6">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search transactions"
          className="mb-4 w-full pl-10"
        />
        <Button className="absolute top-1/2 right-3 -translate-y-1/2 transition-colors">
          <SearchIcon className="h-4 w-4 text-gray-400" />
        </Button>
      </div>
      <Table className="overflow-hidden">
        <TableHeader></TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className="border-gray-100">
              <TableCell className="font-medium">
                {item.name}
                <span className="block text-xs text-gray-500">
                  {item.category}
                </span>
              </TableCell>
              <TableCell className="hidden">{item.category}</TableCell>
              <TableCell className="text-right">
                {item.amount}
                <span className="block text-xs text-gray-500">{item.date}</span>
              </TableCell>
              <TableCell className="hidden">{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
}
