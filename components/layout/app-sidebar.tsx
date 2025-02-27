"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { File, Award, ChartNoAxesColumn } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
    const pathname = usePathname()
    const [currentPage, setCurrentpage] = useState("");

   useEffect(()=>{
        setCurrentpage(pathname)
   },[pathname])

    const onPageChange = (page: string) => {
        setCurrentpage(page)
    }

    const items = [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: <ChartNoAxesColumn />,
        },
        {
            title: "Skill Test",
            url: "/skilltest",
            icon: <Award />,
        },
        {
            title: "internship",
            url: "/internship",
            icon: <File />,
        },
    ]
    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton isActive={currentPage.toLowerCase() === item.url.toLowerCase() ? true : false} asChild onClick={() => onPageChange(item.url)}>
                                        <Link className="hover:text-blue-500 text-gray-600 p-6 text-lg capitalize" href={item.url}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

        </Sidebar>
    )
}

export default AppSidebar;
