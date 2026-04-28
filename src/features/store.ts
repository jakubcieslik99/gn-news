import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import appSettingsReducer from './appSlices/appSettings'
import getHomeNewsReducer from './newsSlices/getHomeNews'
import getCountryNewsReducer from './newsSlices/getCountryNews'

const reducer = { appSettings: appSettingsReducer, getHomeNews: getHomeNewsReducer, getCountryNews: getCountryNewsReducer }

const store = configureStore({ reducer, devTools: import.meta.env.VITE_APP_ENV === 'development' ? true : false })

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppPreloadedState = RootState

export const setupStore = (preloadedState?: AppPreloadedState) => {
  return configureStore({ reducer, preloadedState })
}

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
