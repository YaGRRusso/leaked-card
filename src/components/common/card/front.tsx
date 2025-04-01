import { CardBase } from "./base"

import { FC, HTMLAttributes, useMemo } from "react"
import { useTranslation } from "react-i18next"

import americanexpress from "@/assets/americanexpress.svg"
import chip from "@/assets/chip.svg"
import dinersclub from "@/assets/dinersclub.svg"
import discover from "@/assets/discover.svg"
import elo from "@/assets/elo.svg"
import hipercard from "@/assets/hipercard.svg"
import jcb from "@/assets/jcb.svg"
import mastercard from "@/assets/mastercard.svg"
import visa from "@/assets/visa.svg"
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
        return americanexpress
      case CardBrand.DinersClub:
        return dinersclub
      case CardBrand.Discover:
        return discover
      case CardBrand.Elo:
        return elo
      case CardBrand.Hipercard:
        return hipercard
      case CardBrand.JCB:
        return jcb
      case CardBrand.Mastercard:
        return mastercard
      case CardBrand.Visa:
        return visa
    }
  }, [number])

  return (
    <CardBase className={cn("justify-between p-4", className)} {...rest}>
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-10 items-center justify-center overflow-hidden rounded bg-[#f0b100]">
          <img src={chip} alt="chip" className="h-16 w-16 opacity-40" />
        </div>
        <div className="flex h-12 w-16 items-center justify-end">
          {cardFlag ? <img src={cardFlag} alt="flag" className="h-full" /> : <div className="h-full w-full skeleton" />}
        </div>
      </div>
      <div className="text-xl sm:text-2xl">
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
