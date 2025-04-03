import { CommonHero } from "../common/hero"

import { Warning } from "@phosphor-icons/react"
import { ErrorRouteComponent } from "@tanstack/react-router"
import { HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

export interface LayoutErrorProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutError: ErrorRouteComponent = ({ reset, error, ...rest }) => {
  const { t } = useTranslation()

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-4" {...rest}>
      <CommonHero icon={<Warning className="text-error" />} title={error.name} description={error.message}>
        <button className="btn btn-soft" onClick={reset}>
          {t("tryAgain")}
        </button>
      </CommonHero>
    </main>
  )
}
