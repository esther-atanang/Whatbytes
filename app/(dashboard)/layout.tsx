import AppSidebar from '@/components/layout/app-sidebar';
import Navbar from '@/components/layout/Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='h-screen w-full overflow-hidden'>
      <Navbar />
      <SidebarProvider>
      <AppSidebar />
      <main className='h-[100vh] w-full overflow-scroll '>
        {children}
      </main>
      </SidebarProvider>

    </section>
  )
}

export default layout;
