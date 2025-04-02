import { FC, HTMLAttributes } from "react"

import { cn } from "@/utils/cn"

export interface CommonHeroProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

export const CommonHero: FC<CommonHeroProps> = ({ title, description, children, className, ...rest }) => {
  return (
    <div className={cn("hero", className)} {...rest}>
      <div className="hero-content flex-col text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">{title}</h1>
          {description && <p className="py-6 text-muted">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}

CommonHero.displayName = "CommonHero"
