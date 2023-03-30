export interface SideMenuCountry {
  name: string
  link: string
  code: string
}

interface SideMenuCountries {
  pl: SideMenuCountry[]
  en: SideMenuCountry[]
  de: SideMenuCountry[]
  es: SideMenuCountry[]
  fr: SideMenuCountry[]
}

export const sideMenuCountries: SideMenuCountries = {
  pl: [
    { name: 'Polska', link: 'pl', code: 'PL' },
    { name: 'USA', link: 'us', code: 'US' },
    { name: 'Wielka Brytania', link: 'gb', code: 'GB' },
    { name: 'Niemcy', link: 'de', code: 'DE' },
    { name: 'Hiszpania', link: 'es', code: 'ES' },
    { name: 'Francja', link: 'fr', code: 'FR' },
    { name: 'Włochy', link: 'it', code: 'IT' },
    { name: 'Japonia', link: 'jp', code: 'JP' },
    { name: 'Chiny', link: 'cn', code: 'CN' },
    { name: 'Indie', link: 'in', code: 'IN' },
    { name: 'Australia', link: 'au', code: 'AU' },
    { name: 'Brazylia', link: 'br', code: 'BR' },
  ],
  en: [
    { name: 'Poland', link: 'pl', code: 'PL' },
    { name: 'USA', link: 'us', code: 'US' },
    { name: 'Great Britain', link: 'gb', code: 'GB' },
    { name: 'Germany', link: 'de', code: 'DE' },
    { name: 'Spain', link: 'es', code: 'ES' },
    { name: 'France', link: 'fr', code: 'FR' },
    { name: 'Italy', link: 'it', code: 'IT' },
    { name: 'Japan', link: 'jp', code: 'JP' },
    { name: 'China', link: 'cn', code: 'CN' },
    { name: 'India', link: 'in', code: 'IN' },
    { name: 'Australia', link: 'au', code: 'AU' },
    { name: 'Brazil', link: 'br', code: 'BR' },
  ],
  de: [
    { name: 'Polen', link: 'pl', code: 'PL' },
    { name: 'USA', link: 'us', code: 'US' },
    { name: 'Großbritannien', link: 'gb', code: 'GB' },
    { name: 'Deutschland', link: 'de', code: 'DE' },
    { name: 'Spanien', link: 'es', code: 'ES' },
    { name: 'Frankreich', link: 'fr', code: 'FR' },
    { name: 'Italien', link: 'it', code: 'IT' },
    { name: 'Japan', link: 'jp', code: 'JP' },
    { name: 'China', link: 'cn', code: 'CN' },
    { name: 'Indien', link: 'in', code: 'IN' },
    { name: 'Australien', link: 'au', code: 'AU' },
    { name: 'Brasilien', link: 'br', code: 'BR' },
  ],
  es: [
    { name: 'Polonia', link: 'pl', code: 'PL' },
    { name: 'USA', link: 'us', code: 'US' },
    { name: 'Gran Bretaña', link: 'gb', code: 'GB' },
    { name: 'Alemania', link: 'de', code: 'DE' },
    { name: 'España', link: 'es', code: 'ES' },
    { name: 'Francia', link: 'fr', code: 'FR' },
    { name: 'Italia', link: 'it', code: 'IT' },
    { name: 'Japón', link: 'jp', code: 'JP' },
    { name: 'China', link: 'cn', code: 'CN' },
    { name: 'India', link: 'in', code: 'IN' },
    { name: 'Australia', link: 'au', code: 'AU' },
    { name: 'Brasil', link: 'br', code: 'BR' },
  ],
  fr: [
    { name: 'Pologne', link: 'pl', code: 'PL' },
    { name: 'USA', link: 'us', code: 'US' },
    { name: 'Grande Bretagne', link: 'gb', code: 'GB' },
    { name: 'Allemagne', link: 'de', code: 'DE' },
    { name: 'Espagne', link: 'es', code: 'ES' },
    { name: 'France', link: 'fr', code: 'FR' },
    { name: 'Italie', link: 'it', code: 'IT' },
    { name: 'Japon', link: 'jp', code: 'JP' },
    { name: 'Chine', link: 'cn', code: 'CN' },
    { name: 'Inde', link: 'in', code: 'IN' },
    { name: 'Australie', link: 'au', code: 'AU' },
    { name: 'Brésil', link: 'br', code: 'BR' },
  ],
}
