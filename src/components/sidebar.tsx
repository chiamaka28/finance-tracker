'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import {
  HomeIcon,
  TransactionIcon,
  BudgetIcon,
  PotsNavIcon,
  BillsIcon,
  LeftArrow,
  RightArrow,
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
import Link from 'next/link';

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
  const { state, open, toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      className="rounded-r-2xl bg-gray-900 pt-8 text-gray-200"
    >
      <SidebarContent>
        <Link href="/dashboard">
          <SidebarHeader>
            {state === 'expanded' ? (
              <div className="flex items-center">
                <Image
                  src="/Logo.svg"
                  alt="Finance Tracker Logo"
                  width={120}
                  height={120}
                  loading="eager"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Image
                  src="/f-logo.svg"
                  alt="Finance Tracker Logo"
                  width={15}
                  height={25}
                  loading="eager"
                />
              </div>
            )}
          </SidebarHeader>
        </Link>

        <SidebarGroup className="p-0 pr-2.5 group-data-[collapsible=icon]:pr-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={`${isActive ? 'bg-beige-100 rounded-r-xl' : ''} flex items-center justify-center`}
                  >
                    <SidebarMenuButton
                      variant="default"
                      size="lg"
                      className="group-data-[collapsible=icon]:!size-12 group-data-[collapsible=icon]:!p-3 [&_[data-sidebar=menu-button]]:group-data-[collapsible=icon]:justify-center [&_svg:not([class*='size-'])]:size-6"
                      asChild
                    >
                      <Link href={item.url}>
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
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mb-10">
        <SidebarMenuButton
          onClick={toggleSidebar}
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 font-semibold text-gray-200 group-data-[collapsible=icon]:!size-12 group-data-[collapsible=icon]:!p-3 [&_[data-sidebar=menu-button]]:group-data-[collapsible=icon]:justify-center [&_svg:not([class*='size-'])]:size-6"
        >
          {open ? (
            <>
              <LeftArrow className="h-6 w-6" />
              <span className="text-base">Minimize Menu</span>
            </>
          ) : (
            <RightArrow className="h-6 w-6" />
          )}
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
