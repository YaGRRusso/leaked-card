import { Question, Users } from "@phosphor-icons/react"
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router"
import { useCallback, useRef, useState } from "react"
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
  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    modalRef.current?.showModal()

    setTimeout(() => {
      navigate({ to: "/result" })
    }, 5000)
  }, [navigate])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 sm:gap-16 sm:py-8">
      <CommonHero title={t("homePage.hero")} description={t("homePage.heroDescription")}>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link to="/" hash="faq" className="btn btn-soft btn-xs sm:btn-sm">
            <Question className="mb-1" />
            {t("homePage.faq")}
          </Link>
          <Link to="/" hash="testimonials" className="btn btn-soft btn-xs sm:btn-sm">
            <Users className="mb-1" />
            {t("homePage.testimonials")}
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
        onFormSubmit={handleSubmit}
        onFormChange={setValues}
        onShouldFlip={setIsFlipped}
        className="max-w-3xl"
      />

      <CommonFaq
        faqs={[
          { question: t("homePage.faqList.faq1.question"), answer: t("homePage.faqList.faq1.answer") },
          { question: t("homePage.faqList.faq2.question"), answer: t("homePage.faqList.faq2.answer") },
          { question: t("homePage.faqList.faq3.question"), answer: t("homePage.faqList.faq3.answer") },
          { question: t("homePage.faqList.faq4.question"), answer: t("homePage.faqList.faq4.answer") },
          { question: t("homePage.faqList.faq5.question"), answer: t("homePage.faqList.faq5.answer") },
        ]}
      />

      <CommonStats
        stats={[
          {
            title: t("homePage.statsList.checkedCards"),
            description: t("homePage.statsList.checkedCardsDescription"),
            value: getRandomNumber(50000, 500000).toLocaleString(),
          },
          {
            title: t("homePage.statsList.leakedCards"),
            description: t("homePage.statsList.leakedCardsDescription"),
            value: `${getRandomNumber(10, 20)}%`,
          },
        ]}
      />

      <CommonTestimonials
        testimonials={[
          {
            name: t("homePage.testimonialsList.testimonial1.name"),
            role: t("homePage.testimonialsList.testimonial1.role"),
            image: t("homePage.testimonialsList.testimonial1.image"),
            text: t("homePage.testimonialsList.testimonial1.text"),
          },
          {
            name: t("homePage.testimonialsList.testimonial2.name"),
            role: t("homePage.testimonialsList.testimonial2.role"),
            image: t("homePage.testimonialsList.testimonial2.image"),
            text: t("homePage.testimonialsList.testimonial2.text"),
          },
          {
            name: t("homePage.testimonialsList.testimonial3.name"),
            role: t("homePage.testimonialsList.testimonial3.role"),
            image: t("homePage.testimonialsList.testimonial3.image"),
            text: t("homePage.testimonialsList.testimonial3.text"),
          },
        ]}
      />

      <CommonDialog
        ref={modalRef}
        // open={false}
        title={t("checkingCard")}
        description={t("checkingCardDescription")}
        icon={<span className="loading loading-xs loading-ring" />}
      >
        <progress className="progress mt-8 w-full" />
      </CommonDialog>
    </div>
  )
}
