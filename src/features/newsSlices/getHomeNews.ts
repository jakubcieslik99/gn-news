import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axiosPublic from '../../api/axiosPublic'

interface HomeNewsRequest {
  language: string
  category: string | null
  query: string | null
  nextPage?: string
  fresh: boolean
}

export interface HomeNewsResponse {
  status: string
  totalResults: number
  results: any[] | []
  nextPage: string
  fresh?: boolean
}

const getHomeNews = createAsyncThunk('/news/getHomeNews', async (sendData: HomeNewsRequest, thunkAPI) => {
  try {
    const controller = new AbortController()
    thunkAPI.signal.addEventListener('abort', () => controller.abort())

    const language = `&language=${sendData.language}`
    const category = sendData.category ? `&category=${sendData.category}` : ''
    const query = sendData.query ? `&q=${sendData.query}` : ''
    const nextPage = sendData.nextPage ? `&page=${sendData.nextPage}` : ''

    const { data } = await axiosPublic.get(
      `news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}${language}${category}${query}${nextPage}`,
      { signal: controller.signal },
    )

    return { ...data, fresh: sendData.fresh }
  } catch (error: any) {
    return thunkAPI.rejectWithValue('fetchError')
  }
})

export { getHomeNews }

export interface HomeNewsState {
  loading: boolean
  error: boolean
  errorMessage: string
  results: any[] | []
  nextPage: string
}

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  results: [],
  nextPage: '',
} as HomeNewsState

export const getHomeNewsSlice = createSlice({
  name: 'getHomeNews',
  initialState,
  reducers: {
    errorReset: state => {
      state.error = false
    },
  },
  extraReducers: builder => {
    builder.addCase(getHomeNews.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(getHomeNews.fulfilled, (state, action: PayloadAction<HomeNewsResponse>) => {
      state.loading = false
      if (action.payload.fresh) state.results = action.payload.results
      else state.results = [...state.results, ...action.payload.results]
      state.nextPage = action.payload.nextPage
    })
    builder.addCase(getHomeNews.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false
      if (action.payload) {
        state.error = true
        state.errorMessage = action.payload
      }
    })
  },
})

export const { errorReset } = getHomeNewsSlice.actions
export default getHomeNewsSlice.reducer
