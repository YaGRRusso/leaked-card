import { FC, HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

import { Langs } from "@/i18n"

export interface LayoutFooterProps extends HTMLAttributes<HTMLDivElement> {}

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

export const LayoutFooter: FC<LayoutFooterProps> = ({ ...rest }) => {
  const { t, i18n } = useTranslation()

  return (
    <footer className="container" {...rest}>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm">
          {t("createdBy")}{" "}
          <a className="link link-primary" href="https://github.com/YaGRRusso" target="_blank">
            Yago Russo
          </a>
        </span>
        <select className="select" onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
          <option value="none" disabled>
            {t("changeLanguage")}
          </option>
          {langs.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </footer>
  )
}

LayoutFooter.displayName = "LayoutFooter"
