export interface CategoryMenuOption {
  id: number
  name: string
  value: string
}

interface CategoryMenuOptions {
  pl: CategoryMenuOption[]
  en: CategoryMenuOption[]
  de: CategoryMenuOption[]
  es: CategoryMenuOption[]
  fr: CategoryMenuOption[]
}

export const categoryMenuOptions: CategoryMenuOptions = {
  pl: [
    { id: 1, name: 'Wszystkie', value: '' },
    { id: 2, name: 'Popularne', value: 'top' },
    { id: 3, name: 'Świat', value: 'world' },
    { id: 4, name: 'Biznes', value: 'business' },
    { id: 5, name: 'Rozrywka', value: 'entertainment' },
    { id: 6, name: 'Środowisko', value: 'environment' },
    { id: 7, name: 'Jedzenie', value: 'food' },
    { id: 8, name: 'Zdrowie', value: 'health' },
    { id: 9, name: 'Polityka', value: 'politics' },
    { id: 10, name: 'Nauka', value: 'science' },
    { id: 11, name: 'Sport', value: 'sports' },
    { id: 12, name: 'Technologie', value: 'technology' },
    { id: 13, name: 'Podróże', value: 'tourism' },
  ],
  en: [
    { id: 1, name: 'All', value: '' },
    { id: 2, name: 'Popular', value: 'top' },
    { id: 3, name: 'World', value: 'world' },
    { id: 4, name: 'Business', value: 'business' },
    { id: 5, name: 'Entertainment', value: 'entertainment' },
    { id: 6, name: 'Environment', value: 'environment' },
    { id: 7, name: 'Food', value: 'food' },
    { id: 8, name: 'Health', value: 'health' },
    { id: 9, name: 'Politics', value: 'politics' },
    { id: 10, name: 'Science', value: 'science' },
    { id: 11, name: 'Sport', value: 'sports' },
    { id: 12, name: 'Tech', value: 'technology' },
    { id: 13, name: 'Travels', value: 'tourism' },
  ],
  de: [
    { id: 1, name: 'Alle', value: '' },
    { id: 2, name: 'Beliebt', value: 'top' },
    { id: 3, name: 'Welt', value: 'world' },
    { id: 4, name: 'Unternehmen', value: 'business' },
    { id: 5, name: 'Unterhaltung', value: 'entertainment' },
    { id: 6, name: 'Umfeld', value: 'environment' },
    { id: 7, name: 'Essen', value: 'food' },
    { id: 8, name: 'Gesundheit', value: 'health' },
    { id: 9, name: 'Politik', value: 'politics' },
    { id: 10, name: 'Wissenschaft', value: 'science' },
    { id: 11, name: 'Sport', value: 'sports' },
    { id: 12, name: 'Technologie', value: 'technology' },
    { id: 13, name: 'Reisen', value: 'tourism' },
  ],
  es: [
    { id: 1, name: 'Toda', value: '' },
    { id: 2, name: 'Popular', value: 'top' },
    { id: 3, name: 'Mundo', value: 'world' },
    { id: 4, name: 'Negocio', value: 'business' },
    { id: 5, name: 'Entretenimiento', value: 'entertainment' },
    { id: 6, name: 'Ambiente', value: 'environment' },
    { id: 7, name: 'Alimento', value: 'food' },
    { id: 8, name: 'Salud', value: 'health' },
    { id: 9, name: 'Política', value: 'politics' },
    { id: 10, name: 'Ciencia', value: 'science' },
    { id: 11, name: 'Deporte', value: 'sports' },
    { id: 12, name: 'Tecnologías', value: 'technology' },
    { id: 13, name: 'Viajes', value: 'tourism' },
  ],
  fr: [
    { id: 1, name: 'Toute', value: '' },
    { id: 2, name: 'Populaire', value: 'top' },
    { id: 3, name: 'Monde', value: 'world' },
    { id: 4, name: 'Entreprise', value: 'business' },
    { id: 5, name: 'Divertissement', value: 'entertainment' },
    { id: 6, name: 'Environnement', value: 'environment' },
    { id: 7, name: 'Nourriture', value: 'food' },
    { id: 8, name: 'Santé', value: 'health' },
    { id: 9, name: 'Politique', value: 'politics' },
    { id: 10, name: 'Science', value: 'science' },
    { id: 11, name: 'Sport', value: 'sports' },
    { id: 12, name: 'Technologie', value: 'technology' },
    { id: 13, name: 'Voyages', value: 'tourism' },
  ],
}
