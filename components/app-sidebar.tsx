import * as React from "react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"



// This is sample data.
const data = {
  navMain: [
    {
      title: "Overview",
      url: "/"
    },
    {
      title: "Products",
      url: "/products"
    },
    {
      title: "statistics",
      url: "/statistics"
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar variant="floating" { ...props }>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image src='/assets/logo.png' alt="logo" width={ 200 } height={ 200 } sizes="100vh" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            { data.navMain.map((item) => (
              <SidebarMenuItem key={ item.title }>
                <SidebarMenuButton asChild>
                  <a href={ item.url } className="font-medium">
                    { item.title }
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )) }
          </SidebarMenu>

        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
