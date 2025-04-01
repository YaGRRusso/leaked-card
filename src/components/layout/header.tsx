import { CreditCard, MoonStars, Sun } from "@phosphor-icons/react"
import { FC, HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

import useThemeStore from "@/stores/useTheme"

export interface LayoutHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutHeader: FC<LayoutHeaderProps> = ({ ...rest }) => {
  const { t } = useTranslation()
  const { theme, setTheme } = useThemeStore()

  return (
    <header className="container" {...rest}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-3xl font-bold">
          <CreditCard />
          <h1>{t("leakedCards")}</h1>
        </div>

        <label className="toggle text-base-content">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(ev) => setTheme(ev.target.checked ? "dark" : "light")}
          />
          <Sun />
          <MoonStars />
        </label>
      </div>
    </header>
  )
}

LayoutHeader.displayName = "LayoutHeader"
