import { CommonHero } from "../common/hero"

import { Question } from "@phosphor-icons/react"
import { Link, NotFoundRouteComponent } from "@tanstack/react-router"
import { HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

export interface LayoutNotFoundProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutNotFound: NotFoundRouteComponent = ({ ...rest }) => {
  const { t } = useTranslation()

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-4" {...rest}>
      <CommonHero
        icon={<Question className="text-warning" />}
        title={t("components.nothingFound")}
        description={t("components.nothingFoundDescription")}
      >
        <Link className="btn btn-soft" to="/">
          {t("components.backToStart")}
        </Link>
      </CommonHero>
    </main>
  )
}
