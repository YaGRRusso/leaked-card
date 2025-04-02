import { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CommonTestimonialsProps extends HTMLAttributes<HTMLUListElement> {
  testimonials?: {
    name: string
    role: string
    image: string
    text: string
  }[]
}

export const CommonTestimonials: FC<CommonTestimonialsProps> = ({ testimonials, className, ...rest }) => {
  return (
    <ul className={cn("flex w-full max-w-xl flex-col gap-20", className)} {...rest}>
      {testimonials?.map((testimonial, index) => (
        <li key={index} className="flex flex-col gap-2 text-start" dir={index % 2 === 0 ? "ltr" : "rtl"}>
          <div className="flex gap-4">
            <div className="avatar">
              <div className="w-10 rounded-xl">
                <img src={testimonial.image} />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium">{testimonial.name}</h3>
              <span className="text-xs font-light">{testimonial.role}</span>
            </div>
          </div>
          <p className="text-sm text-muted">{testimonial.text}</p>
        </li>
      ))}
    </ul>
  )
}

CommonTestimonials.displayName = "CommonTestimonials"
