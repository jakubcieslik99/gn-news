import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axiosPublic from '../../api/axiosPublic'

interface CountryNewsRequest {
  country: string
  category: string | null
  query: string | null
  nextPage?: string
  fresh: boolean
}

export interface CountryNewsResponse {
  status: string
  totalResults: number
  results: any[] | []
  nextPage: string
  fresh?: boolean
}

const getCountryNews = createAsyncThunk('/news/getCountryNews', async (sendData: CountryNewsRequest, thunkAPI) => {
  try {
    const controller = new AbortController()
    thunkAPI.signal.addEventListener('abort', () => controller.abort())

    const country = `&country=${sendData.country}`
    const category = sendData.category ? `&category=${sendData.category}` : ''
    const query = sendData.query ? `&q=${sendData.query}` : ''
    const nextPage = sendData.nextPage ? `&page=${sendData.nextPage}` : ''

    const { data } = await axiosPublic.get(
      `news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}${country}${category}${query}${nextPage}`,
      { signal: controller.signal }
    )

    return { ...data, fresh: sendData.fresh }
  } catch (error: any) {
    return thunkAPI.rejectWithValue('fetchError')
  }
})

export { getCountryNews }

export interface CountryNewsState {
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
} as CountryNewsState

export const getCountryNewsSlice = createSlice({
  name: 'getCountryNews',
  initialState,
  reducers: {
    errorReset: state => {
      state.error = false
    },
  },
  extraReducers: builder => {
    builder.addCase(getCountryNews.pending, state => {
      state.loading = true
      state.error = false
    })
    builder.addCase(getCountryNews.fulfilled, (state, action: PayloadAction<CountryNewsResponse>) => {
      state.loading = false
      if (action.payload.fresh) state.results = action.payload.results
      else state.results = [...state.results, ...action.payload.results]
      state.nextPage = action.payload.nextPage
    })
    builder.addCase(getCountryNews.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false
      if (action.payload) {
        state.error = true
        state.errorMessage = action.payload
      }
    })
  },
})

export const { errorReset } = getCountryNewsSlice.actions
export default getCountryNewsSlice.reducer
