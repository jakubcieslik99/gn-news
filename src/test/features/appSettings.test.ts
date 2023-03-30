import { describe, it, expect } from 'vitest'
import appSettingsReducer, {
  switchDisplayMode,
  changeLanguage,
  switchTheme,
  AppSettingsState,
} from '../../features/appSlices/appSettings'

describe('appSettingsSlice', () => {
  const initialState = {
    displayMode: 'tiles',
    language: 'pl',
    theme: 'light',
  } as AppSettingsState

  it('should switch display mode', () => {
    const action = { type: switchDisplayMode.type, payload: 'list' }
    const nextState = appSettingsReducer(initialState, action)

    expect(nextState.displayMode).toBe('list')
  })

  it('should change language and set it in local storage', () => {
    const action = { type: changeLanguage.type, payload: 'en' }
    const nextState = appSettingsReducer(initialState, action)

    expect(nextState.language).toBe('en')
    expect(localStorage.getItem('language')).toBe('en')
  })

  it('should switch theme and set it in local storage', () => {
    const action = { type: switchTheme.type, payload: 'dark' }
    const nextState = appSettingsReducer(initialState, action)

    expect(nextState.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
