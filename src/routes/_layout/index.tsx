import { Question, Users } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { CommonCard } from "@/components/common/card"
import { CommonDialog } from "@/components/common/dialog"
import { CommonFaq } from "@/components/common/faq"
import { CommonFlipper } from "@/components/common/flipper"
import { CommonHero } from "@/components/common/hero"
import { CommonStats } from "@/components/common/stats"
import { CommonTestimonials } from "@/components/common/testimonials"
import { FormsCard, FormsCardSchemaProps } from "@/components/forms/card"
import { getRandomNumber } from "@/helpers/getRandomNumber"

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
          <Link to="/" hash="faq" className="btn btn-soft btn-xs">
            <Question className="mb-1" />
            {t("faq")}
          </Link>
          <Link to="/" hash="testimonials" className="btn btn-soft btn-xs">
            <Users className="mb-1" />
            {t("testimonials")}
          </Link>
        </div>
      </CommonHero>

      <CommonFlipper
        className="aspect-video w-full max-w-3xl"
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
        className="max-w-3xl"
      />

      <CommonDialog
        ref={modalRef}
        title={t("checkingCard")}
        description={t("checkingCardDescription")}
        icon={<span className="loading loading-xs loading-ring" />}
      >
        <progress className="progress mt-8 w-full" />
      </CommonDialog>

      <CommonFaq
        id="faq"
        faqs={[
          { question: t("faqList.faq1.question"), answer: t("faqList.faq1.answer") },
          { question: t("faqList.faq2.question"), answer: t("faqList.faq2.answer") },
          { question: t("faqList.faq3.question"), answer: t("faqList.faq3.answer") },
          { question: t("faqList.faq4.question"), answer: t("faqList.faq4.answer") },
          { question: t("faqList.faq5.question"), answer: t("faqList.faq5.answer") },
        ]}
      />

      <CommonStats
        stats={[
          {
            title: t("statsList.checkedCards"),
            description: t("statsList.checkedCardsDescription"),
            value: getRandomNumber(50000, 500000).toString(),
          },
          {
            title: t("statsList.leakedCards"),
            description: t("statsList.leakedCardsDescription"),
            value: `${getRandomNumber(20, 60)}%`,
          },
        ]}
      />

      <CommonTestimonials
        id="testimonials"
        testimonials={[
          {
            name: t("testimonialsList.testimonial1.name"),
            role: t("testimonialsList.testimonial1.role"),
            image: t("testimonialsList.testimonial1.image"),
            text: t("testimonialsList.testimonial1.text"),
          },
          {
            name: t("testimonialsList.testimonial2.name"),
            role: t("testimonialsList.testimonial2.role"),
            image: t("testimonialsList.testimonial2.image"),
            text: t("testimonialsList.testimonial2.text"),
          },
          {
            name: t("testimonialsList.testimonial3.name"),
            role: t("testimonialsList.testimonial3.role"),
            image: t("testimonialsList.testimonial3.image"),
            text: t("testimonialsList.testimonial3.text"),
          },
        ]}
      />
    </div>
  )
}
