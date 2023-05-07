import { createSlice } from '@reduxjs/toolkit'
import { fetchSearch } from './searchReducers'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    query: '',
    isLoading: false,
    isSuccess: false,
    errors: false
  },
  reducers: {
    setData(state, { payload }) {
      const { data } = payload
      state.data = data
    },
    clearData(state) {
      state.data = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSearch.pending, state => {
        state.isLoading = true
        state.isSuccess = false
        state.errors = false
      })
      .addCase(fetchSearch.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = true
        state.errors = false
        state.data = payload
      })
      .addCase(fetchSearch.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false
        state.errors = true
      })
  }
})

export const { setData, clearData } = searchSlice.actions

export default searchSlice.reducer
