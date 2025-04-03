import { createRootRoute, Outlet } from "@tanstack/react-router"

import { LayoutError } from "@/components/layout/error"
import { LayoutNotFound } from "@/components/layout/not-found"

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: LayoutNotFound,
  errorComponent: LayoutError,
})

export default function RootLayout() {
  return <Outlet />
}
