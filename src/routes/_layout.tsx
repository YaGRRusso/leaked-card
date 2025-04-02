import { createFileRoute, Outlet } from "@tanstack/react-router"

import { LayoutFooter } from "@/components/layout/footer"
import { LayoutHeader } from "@/components/layout/header"
import { LayoutShield } from "@/components/layout/shield"

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <LayoutHeader />
      <div className="container flex flex-1 flex-col py-12">
        <Outlet />
      </div>
      <LayoutFooter />
      <LayoutShield />
    </main>
  )
}
