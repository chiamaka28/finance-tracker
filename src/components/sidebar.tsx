'use client';
import Image from 'next/image';
import { HomeIcon } from '@/lib/icons';

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
    icon: <HomeIcon />,
  },
  {
    title: 'Transactions',
    url: '/dashboard/transactions',
    icon: <HomeIcon />,
  },
  {
    title: 'Budgets',
    url: '/dashboard/budgets',
    icon: <HomeIcon />,
  },
  {
    title: 'Pots',
    url: '/dashboard/pots',
    icon: <HomeIcon />,
  },
  {
    title: 'Recurring Bills',
    url: '/dashboard/bills',
    icon: <HomeIcon />,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar
      collapsible="icon"
      className="rounded-r-2xl bg-black pt-8 text-white"
    >
      <SidebarContent>
        <SidebarHeader>
          {state === 'expanded' ? (
            <Image
              src="/Logo.svg"
              alt="Finance Tracker Logo"
              width={120}
              height={120}
            />
          ) : (
            <Image
              src="/f-logo.svg"
              alt="Finance Tracker Logo"
              width={15}
              height={25}
            />
          )}
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton variant="default" size="lg" asChild>
                    <a href={item.url}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
