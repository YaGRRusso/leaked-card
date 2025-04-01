import { FC, HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"

export interface LayoutFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const LayoutFooter: FC<LayoutFooterProps> = ({ ...rest }) => {
  const { t } = useTranslation()

  return (
    <footer className="container" {...rest}>
      <div className="flex items-center justify-center">
        <span className="text-center text-sm">
          {t("createdBy")}{" "}
          <a className="link link-primary" href="https://github.com/YaGRRusso" target="_blank">
            Yago Russo
          </a>
        </span>
      </div>
    </footer>
  )
}

LayoutFooter.displayName = "LayoutFooter"
