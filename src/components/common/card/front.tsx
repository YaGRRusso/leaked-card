import { CardBase } from "./base"

import { FC, HTMLAttributes, useMemo } from "react"
import { useTranslation } from "react-i18next"

import AmericanExpressIcon from "@/assets/americanexpress.svg?react"
import Chip from "@/assets/chip.svg?react"
import DinersClubIcon from "@/assets/dinersclub.svg?react"
import DiscoverIcon from "@/assets/discover.svg?react"
import EloIcon from "@/assets/elo.svg?react"
import JcbIcon from "@/assets/jcb.svg?react"
import MastercardIcon from "@/assets/mastercard.svg?react"
import VisaIcon from "@/assets/visa.svg?react"
import { CardBrand, getCardBrand } from "@/helpers/getCardBrand"
import { mask } from "@/helpers/mask"
import { cn } from "@/utils/cn"

export interface CardFrontProps extends HTMLAttributes<HTMLDivElement> {
  number?: string
  name?: string
  expiryMonth?: string
  expiryYear?: string
}

export const CardFront: FC<CardFrontProps> = ({ number, name, expiryMonth, expiryYear, className, ...rest }) => {
  const { t } = useTranslation()

  const cardFlag = useMemo(() => {
    const brand = getCardBrand(number)

    switch (brand) {
      case CardBrand.AmericanExpress:
        return <AmericanExpressIcon className="h-full fill-base-content" />
      case CardBrand.DinersClub:
        return <DinersClubIcon className="h-full fill-base-content" />
      case CardBrand.Discover:
        return <DiscoverIcon className="h-full fill-base-content" />
      case CardBrand.Elo:
        return <EloIcon className="h-full fill-base-content" />
      case CardBrand.JCB:
        return <JcbIcon className="h-full fill-base-content" />
      case CardBrand.Mastercard:
        return <MastercardIcon className="h-full fill-base-content" />
      case CardBrand.Visa:
        return <VisaIcon className="h-full fill-base-content" />
      default:
        return null
    }
  }, [number])

  return (
    <CardBase className={cn("justify-between p-4", className)} {...rest}>
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-10 items-center justify-center overflow-hidden rounded bg-[#f0b100]">
          <Chip className="h-16 w-16 opacity-40" />
        </div>
        <div className="flex h-12 w-16 items-center justify-end">
          {cardFlag ? cardFlag : <div className="h-full w-full skeleton bg-base-200" />}
        </div>
      </div>
      <div className="text-xl sm:text-2xl sm:tracking-[0.5rem]">
        <span>{mask({ mask: "0000 0000 0000 0000", lazy: false, placeholderChar: "•" }, number).value}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="uppercase">{name || t("cardInfos.cardholderNamePlaceholder")}</span>
        <span>
          {expiryMonth || t("cardInfos.cardExpiryMonthPlaceholder")}
          {"/"}
          {expiryYear || t("cardInfos.cardExpiryYearPlaceholder")}
        </span>
      </div>
    </CardBase>
  )
}

CardFront.displayName = "CardFront"
