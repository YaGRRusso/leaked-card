import { CardBase } from "./base"

import { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CardBackProps extends HTMLAttributes<HTMLDivElement> {}

export const CardBack: FC<CardBackProps> = ({ className, ...rest }) => {
  return (
    <CardBase className={cn("py-4", className)} {...rest}>
      <div className="h-12 w-full bg-black" />
      <div className="flex p-4">
        <div className="flex h-12 w-2/3 items-center justify-end rounded bg-gradient-to-b from-white from-30% via-yellow-200 via-50% to-white to-70% bg-[length:100%_20%] p-4">
          <span>•••</span>
        </div>
      </div>
    </CardBase>
  )
}

CardBack.displayName = "CardBack"
