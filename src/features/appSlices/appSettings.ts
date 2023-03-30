import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AvailableDisplayModes,
  AvailableLanguages,
  AvailableThemes,
  availableLanguages,
  availableThemes,
} from '../../constants/AppSettings'

let language = localStorage.getItem('language')
if (!language || (language && !availableLanguages.includes(language))) {
  language = availableLanguages[0]
  localStorage.setItem('language', availableLanguages[0])
}

let theme = localStorage.getItem('theme')
if (!theme || (theme && !availableThemes.includes(theme))) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = availableThemes[1]
    localStorage.setItem('theme', availableThemes[1])
  } else {
    theme = availableThemes[0]
    localStorage.setItem('theme', availableThemes[0])
  }
}

export interface AppSettingsState {
  displayMode: AvailableDisplayModes
  language: AvailableLanguages
  theme: AvailableThemes
}

const initialState = {
  displayMode: 'tiles',
  language,
  theme,
} as AppSettingsState

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    switchDisplayMode: (state, action: PayloadAction<AvailableDisplayModes>) => {
      state.displayMode = action.payload
    },
    changeLanguage: (state, action: PayloadAction<AvailableLanguages>) => {
      state.language = action.payload
      localStorage.setItem('language', action.payload)
    },
    switchTheme: (state, action: PayloadAction<AvailableThemes>) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    },
  },
})

export const { switchDisplayMode, changeLanguage, switchTheme } = appSettingsSlice.actions
export default appSettingsSlice.reducer
