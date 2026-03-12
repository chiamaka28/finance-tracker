'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { SearchIcon, SortIcon, FilterIcon, ChevronDownIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';

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
  const isMobile = useIsMobile();
  if (isMobile === undefined) return null;
  return (
    <div className="rounded-lg bg-white p-6">
      <div className="mb-4 flex items-center justify-between gap-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search transactions"
            className="w-full pl-5 md:pl-8 lg:w-75 xl:w-md"
          />
          <Button className="absolute top-1/2 right-3 -translate-y-1/2 transition-colors">
            <SearchIcon className="h-4 w-4 text-gray-400" />
          </Button>
        </div>

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
              <div className="flex items-center gap-1">
                <label className="border-gray-300 text-sm text-gray-300">
                  Sort By
                </label>
                <Button
                  variant="outline"
                  className="border-gray-300 bg-transparent text-gray-900 shadow-none"
                >
                  Latest <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-4 bg-white text-sm">
            <DropdownMenuItem>Oldest</DropdownMenuItem>
            <DropdownMenuItem>A to Z</DropdownMenuItem>
            <DropdownMenuItem>Z to A</DropdownMenuItem>
            <DropdownMenuItem>Highest</DropdownMenuItem>
            <DropdownMenuItem>Lowest</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {isMobile ? (
              <Button
                variant="outline"
                size="icon-lg"
                className="border-none bg-transparent shadow-none"
              >
                <FilterIcon className="h-5 w-5" />
              </Button>
            ) : (
              <div className="flex items-center gap-1">
                <label className="text-sm text-gray-300">Category</label>
                <Button
                  variant="outline"
                  className="border-gray-300 bg-transparent text-gray-900 shadow-none"
                >
                  All Transaction <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent className="flex flex-col gap-4 bg-white text-sm">
            <DropdownMenuItem>Entertainment</DropdownMenuItem>
            <DropdownMenuItem>Bills</DropdownMenuItem>
            <DropdownMenuItem>Groceries</DropdownMenuItem>
            <DropdownMenuItem>Dining Out</DropdownMenuItem>
            <DropdownMenuItem>Transportation</DropdownMenuItem>
            <DropdownMenuItem>Personal Care</DropdownMenuItem>
            <DropdownMenuItem>Education</DropdownMenuItem>
            <DropdownMenuItem>Lifestyle</DropdownMenuItem>
            <DropdownMenuItem>Shopping</DropdownMenuItem>
            <DropdownMenuItem>General</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table className="overflow-hidden">
        <TableHeader className="hidden md:table-header-group">
          <TableRow className="border-b-0 border-gray-100">
            <TableHead className="text-xs text-gray-300">
              Recipient/Sender
            </TableHead>
            <TableHead className="text-xs text-gray-300">Category</TableHead>
            <TableHead className="text-xs text-gray-300">
              Transaction Date
            </TableHead>
            <TableHead className="text-right text-xs text-gray-300">
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className="border-gray-100">
              <TableCell className="py-5 font-medium">
                {item.name}
                <span className="block text-xs text-gray-500 sm:hidden">
                  {item.category}
                </span>
              </TableCell>
              <TableCell className="hidden text-xs text-gray-300 sm:table-cell">
                {item.category}
              </TableCell>

              <TableCell className="hidden text-xs text-gray-300 sm:table-cell">
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

      <Pagination>
        <PaginationContent className="mt-6 justify-between">
          <PaginationItem className="border-gray-300 text-gray-900">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <div className="flex items-center gap-2">
            <PaginationItem className="border-gray-300 text-gray-900">
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-gray-300 text-gray-900">
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-gray-300 text-gray-900">
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-gray-300 text-gray-900">
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-gray-300 text-gray-900">
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
          </div>
          <PaginationItem className="border-gray-300 text-gray-900">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
