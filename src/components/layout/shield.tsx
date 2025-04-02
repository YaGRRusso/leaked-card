import { ShieldCheck } from "@phosphor-icons/react"
import { FC, HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

import { cn } from "@/utils/cn"

export interface LayoutShieldProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutShield: FC<LayoutShieldProps> = ({ className, ...rest }) => {
  const { t } = useTranslation()

  return (
    <div className="fixed right-1 bottom-1 z-10 sm:right-2 sm:bottom-2">
      <div className="max-sm:tooltip max-sm:tooltip-left">
        <div className="tooltip-content sm:hidden">
          <div className="flex flex-col">
            <span className="font-medium">{t("trustedSite")}</span>
            <span className="font-light text-muted">{t("trustedSiteDescription")}</span>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-1 items-center justify-end gap-2 rounded bg-base-200 px-3 py-2 text-xs transition-all hover:opacity-100 max-xl:opacity-40",
            className,
          )}
          {...rest}
        >
          <ShieldCheck size={32} weight="fill" className="mb-1 text-success" />
          <div className="hidden flex-col sm:flex">
            <span className="font-medium">{t("trustedSite")}</span>
            <span className="font-light text-muted">{t("trustedSiteDescription")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

LayoutShield.displayName = "LayoutShield"
