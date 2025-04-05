import {
  Copy,
  Info,
  MagnifyingGlass,
  Question,
  Share,
  TelegramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import gov from "@/assets/gov.png"
import { CommonCheckList } from "@/components/common/check-list"
import { CommonHero } from "@/components/common/hero"
import { CommonQuotes } from "@/components/common/quotes"
import { CommonTitle } from "@/components/common/title"

export const Route = createFileRoute("/_layout/result")({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-16 sm:py-8">
      <CommonHero title={t("resultPage.heroTitle")} description={t("resultPage.heroDescription")}>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link to="/result" hash="infos" className="btn btn-soft btn-xs sm:btn-sm">
            <Question className="mb-1" />
            {t("resultPage.whatIsThisSite")}
          </Link>
          <Link to="/result" hash="strategies" className="btn btn-soft btn-xs sm:btn-sm">
            <Info className="mb-1" />
            {t("resultPage.mainStrategies")}
          </Link>
          <Link to="/result" hash="share" className="btn btn-soft btn-xs sm:btn-sm">
            <Share className="mb-1" />
            {t("resultPage.shareProject")}
          </Link>
        </div>
      </CommonHero>

      <a
        href={t("resultPage.govLink")}
        target="_blank"
        className="group mockup-browser max-h-64 w-full border border-base-300 sm:max-h-96"
      >
        <div className="mockup-browser-toolbar">
          <div className="ml-2 flex w-full items-center gap-2 overflow-hidden rounded border border-input bg-base-200 px-2 py-1 text-xs text-ellipsis whitespace-nowrap transition-all group-hover:border-accent">
            <MagnifyingGlass />
            {t("resultPage.govLinkDescription")}
          </div>
        </div>
        <img src={gov} alt="gov" />
      </a>

      <div className="flex flex-col gap-4">
        <CommonTitle hash="infos" title={t("resultPage.sectionTitleInfos")} icon={<Question />} />
        <article className="flex flex-col gap-6 text-justify font-light tracking-wider">
          <p>{t("resultPage.sectionDescriptionInfos")}</p>
          <CommonQuotes>{t("resultPage.quote")}</CommonQuotes>
        </article>
      </div>

      <div className="flex flex-col gap-4">
        <CommonTitle hash="strategies" title={t("resultPage.sectionTitleStrategies")} icon={<Info />} />
        <CommonCheckList
          list={[
            { text: t("resultPage.checklist.phishing") },
            { text: t("resultPage.checklist.socialMediaFraud") },
            { text: t("resultPage.checklist.techSupportScams") },
            { text: t("resultPage.checklist.fakePrizes") },
            { text: t("resultPage.checklist.paymentAppFraud") },
            { text: t("resultPage.checklist.professionalDesign") },
            { text: t("resultPage.checklist.urgencyAlarm") },
            { text: t("resultPage.checklist.sensitiveDataRequests") },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4 max-sm:text-center">
        <CommonTitle hash="share" title={t("resultPage.shareTitle")} icon={<Share />} />
        <p className="text-sm text-muted">{t("resultPage.shareDescription")}</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            className="btn flex-1 btn-soft btn-info"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Confira este Site: https://descubra-se-seu-cartao-vazou.netlify.app/")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo />
            Twitter
          </a>
          <a
            className="btn flex-1 btn-soft btn-success"
            href={`https://wa.me/?text=${encodeURIComponent("Confira este Site: https://descubra-se-seu-cartao-vazou.netlify.app/")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo />
            Whatsapp
          </a>
          <a
            className="btn flex-1 btn-soft btn-info"
            href={`https://t.me/share/url?url=${encodeURIComponent("https://descubra-se-seu-cartao-vazou.netlify.app/")}&text=${encodeURIComponent("Confira este Site!")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramLogo />
            Telegram
          </a>
          <button className="btn flex-1 btn-soft">
            <Copy />
            Copiar Link
          </button>
        </div>
      </div>
    </div>
  )
}
