import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"

import { CommonCard } from "@/components/common/card"
import { CommonFlipper } from "@/components/common/flipper"

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
})

function RouteComponent() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <CommonFlipper className="aspect-video w-96" onClick={() => setIsFlipped((old) => !old)} isFlipped={isFlipped}>
        <CommonCard.Front number="4" />
        <CommonCard.Back />
      </CommonFlipper>
    </div>
  )
}
