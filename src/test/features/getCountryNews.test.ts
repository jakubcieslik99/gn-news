import { describe, it, expect } from 'vitest'
import getCountryNewsReducer, {
  getCountryNews,
  CountryNewsResponse,
  CountryNewsState,
} from '../../features/newsSlices/getCountryNews'

describe('getCountryNewsSlice', () => {
  const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    results: [],
    nextPage: '',
  } as CountryNewsState

  const responseData = {
    status: 'ok',
    totalResults: 1,
    results: [{ title: 'test' }],
    nextPage: '2137',
  } as CountryNewsResponse

  it('should handle getCountryNews.pending', () => {
    const action = { type: getCountryNews.pending.type }
    const state = getCountryNewsReducer(initialState, action)
    expect(state.loading).toBe(true)
    expect(state.error).toBe(false)
  })

  it('should handle getCountryNews.fulfilled with fresh data', () => {
    const action = { type: getCountryNews.fulfilled.type, payload: { ...responseData, fresh: true } }
    const state = getCountryNewsReducer(initialState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toBe(false)
    expect(state.results).toEqual(responseData.results)
    expect(state.nextPage).toEqual(responseData.nextPage)
  })

  it('should handle getCountryNews.fulfilled with previous data', () => {
    const previousState = {
      loading: false,
      error: false,
      errorMessage: '',
      results: [{ title: 'previous data' }],
      nextPage: '2137',
    } as CountryNewsState

    const action = { type: getCountryNews.fulfilled.type, payload: responseData }
    const state = getCountryNewsReducer(previousState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toBe(false)
    expect(state.results).toEqual([...previousState.results, ...responseData.results])
    expect(state.nextPage).toEqual(responseData.nextPage)
  })

  it('should handle getCountryNews.rejected', () => {
    const action = { type: getCountryNews.rejected.type, payload: 'fetchError' }
    const state = getCountryNewsReducer(initialState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toBe(true)
    expect(state.errorMessage).toEqual('fetchError')
  })
})
