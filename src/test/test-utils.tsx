import React, { PropsWithChildren } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import appStore, { setupStore, AppStore, RootState } from '../features/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
  route?: string
}

const render = (
  ui: React.ReactElement,
  {
    preloadedState = {
      appSettings: appStore.getState().appSettings,
      getHomeNews: appStore.getState().getHomeNews,
      getCountryNews: appStore.getState().getCountryNews,
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export default render
