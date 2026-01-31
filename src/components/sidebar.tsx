'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  TransactionIcon,
  BudgetIcon,
  PotsNavIcon,
  BillsIcon,
} from '@/lib/icons';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarTrigger,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: HomeIcon,
  },
  {
    title: 'Transactions',
    url: '/dashboard/transactions',
    icon: TransactionIcon,
  },
  {
    title: 'Budgets',
    url: '/dashboard/budgets',
    icon: BudgetIcon,
  },
  {
    title: 'Pots',
    url: '/dashboard/pots',
    icon: PotsNavIcon,
  },
  {
    title: 'Recurring Bills',
    url: '/dashboard/bills',
    icon: BillsIcon,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      className="rounded-r-2xl bg-black pt-8 text-gray-200"
    >
      <SidebarContent>
        <SidebarHeader>
          {state === 'expanded' ? (
            <Image
              src="/Logo.svg"
              alt="Finance Tracker Logo"
              width={120}
              height={120}
              loading="eager"
            />
          ) : (
            <Image
              src="/f-logo.svg"
              alt="Finance Tracker Logo"
              width={15}
              height={25}
              loading="eager"
            />
          )}
        </SidebarHeader>

        <SidebarGroup className="p-0 pr-2.5">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;
                const pathname = usePathname();
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={isActive ? 'bg-beige-100 rounded-r-xl' : ''}
                  >
                    <SidebarMenuButton
                      variant="default"
                      size="lg"
                      className={`[&_svg:not([class*='size-'])]:size-6`}
                      asChild
                    >
                      <a href={item.url}>
                        <Icon
                          className={
                            isActive ? 'text-green-400' : 'text-gray-200'
                          }
                          fill="currentColor"
                        />
                        <span
                          className={`${isActive ? 'text-gray-900' : 'text-gray-200'} text-[15px] font-bold`}
                        >
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-10">
        <SidebarTrigger className="flex gap-2" />
      </SidebarFooter>
    </Sidebar>
  );
}
