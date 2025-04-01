import { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CommonFrontProps extends HTMLAttributes<HTMLDivElement> {}

export const CommonFront: FC<CommonFrontProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn("", className)} {...rest}>
      {children}
    </div>
  )
}

CommonFront.displayName = "CommonFront"
