import { FC, HTMLAttributes } from "react"
import { Trans } from "react-i18next"

import { cn } from "@/utils/cn"

export interface CommonHeroProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

export const CommonHero: FC<CommonHeroProps> = ({ title, description, children, className, ...rest }) => {
  return (
    <div className={cn("hero", className)} {...rest}>
      <div className="hero-content flex-col px-0 text-center">
        <h1 className="text-4xl font-bold tracking-wider sm:text-5xl">
          <Trans components={{ strong: <strong className="font-extrabold text-accent uppercase" /> }}>{title}</Trans>
        </h1>
        {description && <p className="text-muted">{description}</p>}
        {children}
      </div>
    </div>
  )
}

CommonHero.displayName = "CommonHero"
