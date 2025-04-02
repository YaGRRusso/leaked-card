import { FC, HTMLAttributes } from "react"
import { Trans } from "react-i18next"

export interface CommonHeroProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

export const CommonHero: FC<CommonHeroProps> = ({ title, description, children, className, ...rest }) => {
  return (
    <div className="hero" {...rest}>
      <div className="hero-content flex-col px-0 text-center">
        <div className={className}>
          <h1 className="text-4xl font-bold tracking-wider sm:text-5xl">
            <Trans
              i18nKey={title}
              components={{ strong: <strong className="font-extrabold text-accent uppercase" /> }}
            />
          </h1>
          {description && <p className="py-6 text-muted">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}

CommonHero.displayName = "CommonHero"
