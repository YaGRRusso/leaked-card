import { X } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { CommonCard } from "@/components/common/card"
import { CommonFlipper } from "@/components/common/flipper"
import { FormsCard, FormsCardSchemaProps } from "@/components/forms/card"

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
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
      <FormsCard onFormSubmit={() => modalRef.current?.showModal()} onFormChange={setValues} />

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm">
              <X />
            </button>
          </form>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold">{t("checkingCard")}</h3>
            <span className="loading loading-xs loading-ring" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-2">
            <span className="text-sm text-muted">{t("checkingCardDescription")}</span>
            <progress className="progress w-full"></progress>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </div>
  )
}
