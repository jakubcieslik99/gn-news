import { AvailableLanguages, availableLanguages } from '../constants/AppSettings'
import pl from './pl.json'
import en from './en.json'
import de from './de.json'
import es from './es.json'
import fr from './fr.json'

export const tr = (key: string, language?: AvailableLanguages): string => {
  if (!language) language = (localStorage.getItem('language') as AvailableLanguages) || availableLanguages[0]

  let langData: { [key: string]: string } = {}

  switch (language) {
    case availableLanguages[0]:
      langData = pl
      break
    case availableLanguages[1]:
      langData = en
      break
    case availableLanguages[2]:
      langData = de
      break
    case availableLanguages[3]:
      langData = es
      break
    case availableLanguages[4]:
      langData = fr
      break
    default:
      langData = pl
  }

  return langData[key]
}
