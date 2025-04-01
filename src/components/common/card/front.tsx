import { CardBase } from "./base"

import { FC, HTMLAttributes, useMemo } from "react"

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
import { cn } from "@/utils/cn"

export interface CardFrontProps extends HTMLAttributes<HTMLDivElement> {
  number?: string
  name?: string
  expiration?: string
}

export const CardFront: FC<CardFrontProps> = ({ number, name, expiration, className, ...rest }) => {
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
        <div className="flex h-8 w-10 items-center justify-center overflow-hidden rounded bg-yellow-500">
          <img src={chip} alt="chip" className="h-16 w-16 opacity-50" />
        </div>
        <div className="flex h-12 w-16 items-center justify-end">
          {cardFlag ? <img src={cardFlag} alt="flag" /> : <div className="h-full w-full skeleton" />}
        </div>
      </div>
      <div className="text-2xl">
        <span>•••• •••• •••• ••••</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="uppercase">Cardholder Name</span>
        <span>••/••</span>
      </div>
    </CardBase>
  )
}

CardFront.displayName = "CardFront"
