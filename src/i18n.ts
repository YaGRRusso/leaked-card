import en from "../messages/en.json"
import pt from "../messages/pt.json"
import validateEn from "../messages/validate-en.json"
import validatePt from "../messages/validate-pt.json"

import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: en,
    validate: validateEn,
  },
  pt: {
    translation: pt,
    validate: validatePt,
  },
}

export type Langs = keyof typeof resources

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({ resources, interpolation: { escapeValue: false } })

export default i18n
