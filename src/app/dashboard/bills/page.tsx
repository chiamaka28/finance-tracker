'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from '@/components/ui/input';
import { SearchIcon, SortIcon, ChevronDownIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';
import { BillIcon } from '@/lib/icons';

export default function BillsPage() {
  const isMobile = useIsMobile();
  return (
    <div className="bg-beige-100 @container min-h-screen p-7 md:px-10">
      <h1 className="mb-4 text-2xl font-bold">Recurring Bills</h1>
      <div className="grid grid-cols-1 gap-6 @2xl:grid-cols-[30%_1fr]">
        <div className="mt-7 sm:mb-6 sm:grid sm:grid-cols-2 md:mt-0 md:mb-0 md:grid-cols-1">
          <Card className="flex h-29 justify-center bg-gray-900 text-white ring-0 sm:h-51">
            <CardContent className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-6">
              <div>
                <BillIcon />
              </div>
              <div>
                <p>Total bills</p>
                <p className="text-3xl font-bold">$384.98</p>
              </div>
            </CardContent>
          </Card>
          <Card className="my-6 bg-white ring-0 sm:my-0 sm:h-51">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between border-b border-gray-100 pt-3 pb-3">
                <p className="text-gray-300">Paid Bills</p>
                <p className="font-bold text-gray-900">2 ($320.00)</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pt-3 pb-3">
                <p className="text-gray-300">Total Upcoming</p>
                <p className="font-bold text-gray-900">6 ($1,230.00)</p>
              </div>
              <div className="text-red flex items-center justify-between pt-3">
                <p>Due Soon</p>
                <p className="font-bold">2 ($40.00)</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="rounded-lg bg-white p-6">
          <div className="mb-4 flex justify-between gap-6">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search Bills"
                className="w-full border-gray-300 px-4"
              />
              <Button className="absolute top-1/2 right-3 -translate-y-1/2 transition-colors">
                <SearchIcon className="h-4 w-4 text-gray-400" />
              </Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {isMobile ? (
                    <Button
                      variant="outline"
                      size="icon-lg"
                      className="border-none bg-transparent shadow-none"
                    >
                      <SortIcon className="h-5 w-5" />
                    </Button>
                  ) : (
                    <div>
                      <label className="mr-2 text-sm text-gray-300">
                        Sort By
                      </label>
                      <Button
                        variant="outline"
                        className="border-gray-300 bg-transparent text-gray-300 shadow-none"
                      >
                        Latest <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuLabel>Oldest</DropdownMenuLabel>
                  <DropdownMenuItem>A to Z</DropdownMenuItem>
                  <DropdownMenuItem>Z to A</DropdownMenuItem>
                  <DropdownMenuItem>Highest</DropdownMenuItem>
                  <DropdownMenuItem>Lowest</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Table className="overflow-hidden">
            <TableHeader className="hidden md:table-header-group">
              <TableRow className="border-b-0 border-gray-100">
                <TableHead>Recipient/Sender</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Transaction Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id} className="border-gray-100">
                  <TableCell className="font-medium">
                    {item.name}
                    <span className="block text-xs text-gray-500 sm:hidden">
                      {item.category}
                    </span>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {item.category}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {item.date}
                  </TableCell>
                  <TableCell className="text-right">
                    {item.amount}
                    {/* <span className="block text-xs text-gray-500 sm:hidden">
                      {item.date}
                    </span> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter></TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}

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
