import { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CommonFaqProps extends HTMLAttributes<HTMLDivElement> {
  faqs?: {
    question: string
    answer: string
  }[]
}

export const CommonFaq: FC<CommonFaqProps> = ({ faqs, className, ...rest }) => {
  return (
    <div className={cn("flex max-w-xl flex-col", className)} {...rest}>
      {faqs?.map((faq, index) => (
        <div key={index} className="collapse rounded-none border-b border-base-content/20 last:border-none">
          <input type="radio" name="my-accordion-1" defaultChecked={index === 0} />
          <div className="collapse-title font-semibold">{faq.question}</div>
          <div className="collapse-content text-sm text-muted">{faq.answer}</div>
        </div>
      ))}
    </div>
  )
}

CommonFaq.displayName = "CommonFaq"
