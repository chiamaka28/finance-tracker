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
import { SearchIcon, SortIcon, FilterIcon } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ChevronDownIcon } from 'lucide-react';

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
    <div className="rounded-lg bg-white p-6">
      <div className="mb-4 flex justify-between gap-6">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search transactions"
            className="w-full pl-10"
          />
          <Button className="absolute top-1/2 right-3 -translate-y-1/2 transition-colors">
            <SearchIcon className="h-4 w-4 text-gray-400" />
          </Button>
        </div>
        <div>
          <Select>
            <SelectTrigger className="relative">
              <SortIcon className="h-5 w-5 md:hidden" />
              <ChevronDownIcon className="text-muted-foreground pointer-events-none hidden size-4" />

              <SelectValue className="[&>span]:hidden md:[&>span]:inline" />
            </SelectTrigger>
            <SelectContent className="w-28.5 bg-white sm:w-auto">
              <SelectGroup>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="border-none shadow-none"
              >
                <SortIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="border-none shadow-none"
              >
                <FilterIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu> */}
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

      <Pagination>
        <PaginationContent className="mt-6">
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
