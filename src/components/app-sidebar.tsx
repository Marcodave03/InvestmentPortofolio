"use client";

import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Home,
  Coins,
  ChartPie,
  HandCoins,
  ChartBarIcon,
  ChartArea
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
// Menu items.

const dashboard = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
];


const saham = [
  {
    title: "Stock IDX",
    url: "/dashboard/stockid",
    icon: ChartBarIcon,
  },
  {
    title: "Stock US",
    url: "/dashboard/stockus",
    icon: ChartPie,
  },
  {
    title: "Financials",
    url: "/dashboard/transaction",
    icon: HandCoins,
  },
  {
    title: "Chart",
    url: "#",
    icon: ChartArea,
  },
];

const crypto = [
  {
    title: "Crypto",
    url: "/dashboard/crypto",
    icon: Coins,
  },
  {
    title: "Financials",
    url: "/dashboard/transaction",
    icon: HandCoins,
  },
  {
    title: "Chart",
    url: "/dashboard/crpchart",
    icon: ChartArea,
  },
];

const buy = [
  {
    title: "Buy US Stocks",
    url: "/dashboard/buystockid",
    icon: ChartBarIcon,
  },
  {
    title: "Buy IDX Stocks",
    url: "/dashboard/buystockid",
    icon: ChartBarIcon,
  },
  {
    title: "Buy Crypto",
    url: "/dashboard/buycrypto",
    icon: Coins,
  },
];


export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar variant="inset" collapsible="icon" className="border-gray-200 dark:border-gray-900  border-r-2">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {state === "expanded" ? (
                    <>
                      Select Portofolio
                      <ChevronDown className="ml-auto h-4 w-4" />
                    </>
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Marco Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Ceha Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>

      <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboard.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      passHref
                      className="flex items-center gap-2 "
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Stocks</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {saham.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      passHref
                      className="flex items-center gap-2 "
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel> Crypto</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {crypto.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Trade</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {buy.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        

      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {/* <User2 /> Username */}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
