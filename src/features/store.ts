import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import appSettingsReducer from './appSlices/appSettings'
import getHomeNewsReducer from './newsSlices/getHomeNews'
import getCountryNewsReducer from './newsSlices/getCountryNews'

const reducer = {
  appSettings: appSettingsReducer,
  getHomeNews: getHomeNewsReducer,
  getCountryNews: getCountryNewsReducer,
}

const store = configureStore({
  reducer,
  devTools: import.meta.env.VITE_ENV === 'development' ? true : false,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({ reducer, preloadedState })
}

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
