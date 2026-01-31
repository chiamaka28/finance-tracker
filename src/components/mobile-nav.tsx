'use client';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  HomeIcon,
  PotsNavIcon,
  TransactionIcon,
  BudgetIcon,
  BillsIcon,
} from '@/lib/icons';

export default function MobileNav() {
  return (
    <div className="sticky bottom-0 left-0 w-full">
      <div className="flex h-16 w-full items-center justify-around rounded-t-2xl bg-black pt-3 md:hidden">
        {items.map((item) => {
          const pathname = usePathname();
          const isActive = pathname === item.url;
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              className={`flex h-full flex-col gap-0 rounded-t-lg rounded-b-none [&_svg:not([class*='size-'])]:size-7 ${isActive ? 'bg-beige-100 border-b border-green-400' : 'bg-transparent'}`}
            >
              <a
                href={item.url}
                className={`flex flex-col items-center justify-center`}
              >
                <Icon
                  className={isActive ? 'text-green-400' : 'text-gray-200'}
                  fill="currentColor"
                />
              </a>
              <span
                className={`hidden text-sm font-semibold sm:block ${isActive ? 'text-gray-900' : 'text-gray-200'}`}
              >
                {item.title}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

const items = [
  {
    id: 1,
    url: '/dashboard',
    icon: HomeIcon,
    title: 'Overview',
  },
  {
    id: 2,
    url: '/dashboard/transactions',
    icon: TransactionIcon,
    title: 'Transactions',
  },
  {
    id: 3,
    url: '/dashboard/budgets',
    icon: BudgetIcon,
    title: 'Budgets',
  },
  {
    id: 4,
    url: '/dashboard/pots',
    icon: PotsNavIcon,
    title: 'Pots',
  },
  {
    id: 5,
    url: '/dashboard/bills',
    icon: BillsIcon,
    title: ' Recurring Bills',
  },
];
