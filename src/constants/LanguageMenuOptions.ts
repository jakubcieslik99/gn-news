import { AvailableLanguages, AvailableCodes } from './AppSettings'

export interface LanguageMenuOption {
  id: number
  name: string
  value: AvailableLanguages
  code: AvailableCodes
}

export const languageMenuOptions: LanguageMenuOption[] = [
  { id: 1, name: 'PL', value: 'pl', code: 'PL' },
  { id: 2, name: 'EN', value: 'en', code: 'US' },
  { id: 3, name: 'DE', value: 'de', code: 'DE' },
  { id: 4, name: 'ES', value: 'es', code: 'ES' },
  { id: 5, name: 'FR', value: 'fr', code: 'FR' },
]
