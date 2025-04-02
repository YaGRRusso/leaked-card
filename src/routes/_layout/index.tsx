import { Question, Users } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { CommonCard } from "@/components/common/card"
import { CommonDialog } from "@/components/common/dialog"
import { CommonFaq } from "@/components/common/faq"
import { CommonFlipper } from "@/components/common/flipper"
import { CommonHero } from "@/components/common/hero"
import { CommonTestimonials } from "@/components/common/testimonials"
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
        className="aspect-video w-full max-w-xl"
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
      <CommonFaq
        id="faq"
        faqs={[
          {
            question: "How to use this app?",
            answer: "You can use this app by following the instructions provided in the documentation.",
          },
          {
            question: "What is the purpose of this app?",
            answer:
              "The purpose of this app is to provide a user-friendly interface for managing your tasks and projects.",
          },
          {
            question: "What is the purpose of this app?",
            answer:
              "The purpose of this app is to provide a user-friendly interface for managing your tasks and projects.",
          },
        ]}
      />
      <CommonTestimonials
        id="testimonials"
        testimonials={[
          {
            name: "John Doe",
            role: "Software Engineer",
            image: "https://i.pravatar.cc/150?img=1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic voluptatum qui? Laudantium quae unde veniam delectus commodi tenetur ullam corrupti, at sint quod optio quos, temporibus quas voluptas illo.",
          },
          {
            name: "Jane Smith",
            role: "Product Manager",
            image: "https://i.pravatar.cc/150?img=2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic voluptatum qui? Laudantium quae unde veniam delectus commodi tenetur ullam corrupti, at sint quod optio quos, temporibus quas voluptas illo.",
          },
        ]}
      />
    </div>
  )
}
