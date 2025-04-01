import { createFileRoute, Outlet } from "@tanstack/react-router"

import { LayoutFooter } from "@/components/layout/footer"
import { LayoutHeader } from "@/components/layout/header"

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <LayoutHeader />
      <div className="container flex-1">
        <Outlet />
      </div>
      <LayoutFooter />
    </div>
  )
}
