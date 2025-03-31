import { SmileySad } from "@phosphor-icons/react"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"

import { Title } from "@/components/title"

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: PageNotFound,
})

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-32">
      <SmileySad />
      <Title>Not Found</Title>
      <button className="btn">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  )
}

export default function RootLayout() {
  return <Outlet />
}
