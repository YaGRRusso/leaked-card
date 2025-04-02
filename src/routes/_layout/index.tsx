import { Question, Users } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { CommonCard } from "@/components/common/card"
import { CommonDialog } from "@/components/common/dialog"
import { CommonFlipper } from "@/components/common/flipper"
import { CommonHero } from "@/components/common/hero"
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
    <div className="flex flex-1 flex-col items-center justify-center gap-16">
      <CommonHero title={t("hero")} description={t("heroDescription")}>
        <div className="flex items-center gap-2">
          <button className="btn btn-soft btn-xs">
            <Question className="mb-1" />
            {t("faq")}
          </button>
          <button className="btn btn-soft btn-xs">
            <Users className="mb-1" />
            {t("testimonials")}
          </button>
        </div>
      </CommonHero>
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
      <CommonDialog
        ref={modalRef}
        title={t("checkingCard")}
        description={t("checkingCardDescription")}
        icon={<span className="loading loading-xs loading-ring" />}
      >
        <progress className="progress mt-8 w-full" />
      </CommonDialog>
    </div>
  )
}
