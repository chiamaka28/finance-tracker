import { cookies } from 'next/headers';

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { cn } from '@/app/lib/utils';
import { AppSidebar } from '@/components/sidebar';
import MobileNav from '@/components/mobile-nav';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset
        className={cn(
          '@container/content',
          'has-data-[layout=fixed]:h-svh',
          'peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]'
        )}
      >
        <main className="h-full w-full">{children}</main>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  );
}
