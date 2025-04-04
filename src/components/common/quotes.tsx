import { Quotes } from "@phosphor-icons/react"
import { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CommonQuotesProps extends HTMLAttributes<HTMLDivElement> {}

export const CommonQuotes: FC<CommonQuotesProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn("flex gap-2 text-center font-medium sm:gap-4", className)} {...rest}>
      <Quotes weight="fill" className="mb-auto -scale-x-100 text-3xl text-accent" />
      <p className="flex-1 pt-2 text-lg text-accent">{children}</p>
      <Quotes weight="fill" className="mt-auto text-3xl text-accent" />
    </div>
  )
}

CommonQuotes.displayName = "CommonQuotes"
