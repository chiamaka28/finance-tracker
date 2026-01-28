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
          // Set content container, so we can use container queries
          '@container/content',

          // If layout is fixed, set the height
          // to 100svh to prevent overflow
          'has-data-[layout=fixed]:h-svh',

          // If layout is fixed and sidebar is inset,
          // set the height to 100svh - spacing (total margins) to prevent overflow
          'peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]'
        )}
      >
        <main>{children}</main>
        <MobileNav />
      </SidebarInset>
    </SidebarProvider>
  );
}
