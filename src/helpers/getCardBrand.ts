export enum CardBrand {
  Visa = "Visa",
  Mastercard = "Mastercard",
  AmericanExpress = "American Express",
  Discover = "Discover",
  DinersClub = "Diners Club",
  JCB = "JCB",
  Elo = "Elo",
  Unknown = "Unknown",
}

export function getCardBrand(cardNumber?: string): CardBrand {
  if (!cardNumber) return CardBrand.Unknown
  const cleanedNumber = cardNumber.replace(/\D/g, "")

  if (/^5[1-5]/.test(cleanedNumber) || /^2(2[2-9]|[3-7][0-9])/.test(cleanedNumber)) return CardBrand.Mastercard
  if (/^3[47]/.test(cleanedNumber)) return CardBrand.AmericanExpress
  if (/^6(011|22[1-9]|4[4-9]|5)/.test(cleanedNumber)) return CardBrand.Discover
  if (/^3(0[0-5]|[68])/.test(cleanedNumber)) return CardBrand.DinersClub
  if (/^35(2[89]|[3-8][0-9])/.test(cleanedNumber)) return CardBrand.JCB
  if (/^(4011|4312|4389|5041|5066|5090|6277|6362|6363)/.test(cleanedNumber)) return CardBrand.Elo
  if (/^4/.test(cleanedNumber)) return CardBrand.Visa

  return CardBrand.Unknown
}
