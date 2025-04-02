import { CommonTitle } from "./title"

import { Question } from "@phosphor-icons/react"
import { FC, HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

import { cn } from "@/utils/cn"

export interface CommonFaqProps extends HTMLAttributes<HTMLUListElement> {
  faqs?: {
    question: string
    answer: string
  }[]
}

export const CommonFaq: FC<CommonFaqProps> = ({ faqs, className, ...rest }) => {
  const { t } = useTranslation()

  return (
    <ul className={cn("flex w-full flex-col", className)} {...rest}>
      <CommonTitle to="/" hash="faq" icon={<Question />} title={t("faq")} />
      {faqs?.map((faq, index) => (
        <li key={index} className="collapse rounded-none border-b border-base-content/20 last:border-none">
          <input type="radio" name="accordion" defaultChecked={index === 0} />
          <div className="collapse-title px-0 font-semibold">{faq.question}</div>
          <div className="collapse-content px-0 text-sm text-muted">{faq.answer}</div>
        </li>
      ))}
    </ul>
  )
}

CommonFaq.displayName = "CommonFaq"
