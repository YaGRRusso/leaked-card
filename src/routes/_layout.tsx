import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router"
import { useEffect } from "react"

import { LayoutFooter } from "@/components/layout/footer"
import { LayoutHeader } from "@/components/layout/header"
import { LayoutShield } from "@/components/layout/shield"

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash)
      if (element) element.scrollIntoView({ behavior: "smooth" })
    }
  }, [hash])

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
