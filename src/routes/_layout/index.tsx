import { createFileRoute } from "@tanstack/react-router"
import { useRef, useState } from "react"

import { CommonCard } from "@/components/common/card"
import { CommonDialog } from "@/components/common/dialog"
import { CommonFlipper } from "@/components/common/flipper"
import { FormsCard, FormsCardSchemaProps } from "@/components/forms/card"

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
})

function RouteComponent() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [values, setValues] = useState<FormsCardSchemaProps>()
  const modalRef = useRef<HTMLDialogElement>(null)

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <CommonFlipper
        className="aspect-video w-full max-w-96"
        onClick={() => setIsFlipped((old) => !old)}
        isFlipped={isFlipped}
      >
        <CommonCard.Front
          number={values?.cardNumber}
          name={values?.cardholderName}
          expiryMonth={values?.cardExpiryMonth}
          expiryYear={values?.cardExpiryYear}
        />
        <CommonCard.Back cvv={values?.cardCvv} />
      </CommonFlipper>
      <FormsCard
        onFormSubmit={() => modalRef.current?.showModal()}
        onFormChange={setValues}
        onShouldFlip={setIsFlipped}
      />
      <CommonDialog ref={modalRef} />
    </div>
  )
}
