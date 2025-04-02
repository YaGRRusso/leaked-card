import { GithubLogo, MoonStars, Sun } from "@phosphor-icons/react"
import { FC, HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

import { Langs } from "@/i18n"
import useThemeStore from "@/stores/useTheme"

const langs: { label: string; value: Langs }[] = [
  {
    label: "Português (PT)",
    value: "pt",
  },
  {
    label: "English (EN)",
    value: "en",
  },
]

export interface LayoutHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutHeader: FC<LayoutHeaderProps> = ({ ...rest }) => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useThemeStore()

  return (
    <header className="container" {...rest}>
      <div className="flex items-center justify-between gap-x-8 gap-y-2 max-sm:flex-col">
        <h1 className="text-xl font-medium">{t("leakedCards")}</h1>

        <div className="flex items-center gap-2 max-sm:flex-1 max-sm:justify-center">
          <label className="toggle border-input text-base-content">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(ev) => setTheme(ev.target.checked ? "dark" : "light")}
            />
            <Sun />
            <MoonStars />
          </label>

          <select
            className="select rounded-xl select-xs"
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="none" disabled>
              {t("changeLanguage")}
            </option>
            {langs.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>

          <a
            href="https://github.com/YaGRRusso/leaked-card"
            target="_blank"
            className="btn btn-circle border-input btn-outline btn-xs"
          >
            <GithubLogo />
          </a>
        </div>
      </div>
    </header>
  )
}

LayoutHeader.displayName = "LayoutHeader"
