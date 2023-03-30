import { describe, it, expect } from 'vitest'
import getHomeNewsReducer, { getHomeNews, HomeNewsResponse, HomeNewsState } from '../../features/newsSlices/getHomeNews'

describe('getHomeNewsSlice', () => {
  const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    results: [],
    nextPage: '',
  } as HomeNewsState

  const responseData = {
    status: 'ok',
    totalResults: 1,
    results: [{ title: 'test' }],
    nextPage: '2137',
  } as HomeNewsResponse

  it('should handle getHomeNews.pending', () => {
    const action = { type: getHomeNews.pending.type }
    const state = getHomeNewsReducer(initialState, action)
    expect(state.loading).toBe(true)
    expect(state.error).toBe(false)
  })

  it('should handle getHomeNews.fulfilled with fresh data', () => {
    const action = { type: getHomeNews.fulfilled.type, payload: { ...responseData, fresh: true } }
    const state = getHomeNewsReducer(initialState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toBe(false)
    expect(state.results).toEqual(responseData.results)
    expect(state.nextPage).toEqual(responseData.nextPage)
  })

  it('should handle getHomeNews.fulfilled with previous data', () => {
    const previousState = {
      loading: false,
      error: false,
      errorMessage: '',
      results: [{ title: 'previous data' }],
      nextPage: '2137',
    } as HomeNewsState

    const action = { type: getHomeNews.fulfilled.type, payload: responseData }
    const state = getHomeNewsReducer(previousState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toBe(false)
    expect(state.results).toEqual([...previousState.results, ...responseData.results])
    expect(state.nextPage).toEqual(responseData.nextPage)
  })

  it('should handle getHomeNews.rejected', () => {
    const action = { type: getHomeNews.rejected.type, payload: 'fetchError' }
    const state = getHomeNewsReducer(initialState, action)
    expect(state.loading).toBe(false)
    expect(state.error).toBe(true)
    expect(state.errorMessage).toEqual('fetchError')
  })
})
