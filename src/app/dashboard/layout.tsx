import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BreadcrumbEllipsis } from "@/components/ui/breadcrumb";
import { ActionButton } from "@/components/actionButton";
import { DarkTheme } from "@/components/darktheme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full overflow-hidden">
        <header className="bg-white dark:bg-black flex h-10 items-center justify-between border-b px-2 py-6 ">
          <div className="flex flex-row items-center w-full">
            <SidebarTrigger />
            <BreadcrumbEllipsis />
            <div className="flex flex-row ml-auto space-x-2">
              <DarkTheme />
              <ActionButton />
            </div>
          </div>
        </header>
        <SidebarInset className="flex-1 overflow-auto w-full pt-2">
          <main className="m-2 max-w-full">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
