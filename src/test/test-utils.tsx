import React, { type JSX, type PropsWithChildren } from 'react'
import { render as rtlRender, type RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import appStore, { setupStore, type AppStore, type AppPreloadedState } from '../features/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: AppPreloadedState
  store?: AppStore
  route?: string
}

const render: any = (
  ui: React.ReactElement,
  {
    preloadedState = {
      appSettings: appStore.getState().appSettings,
      getHomeNews: appStore.getState().getHomeNews,
      getCountryNews: appStore.getState().getCountryNews,
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export default render
