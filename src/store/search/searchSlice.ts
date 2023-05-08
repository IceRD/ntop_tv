import { createSlice } from '@reduxjs/toolkit'
import { fetchSearch } from './searchReducers'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
    query: '',
    variantList: [],
    isLoading: false,
    isSuccess: false,
    errors: false
  },
  reducers: {
    setSearchData(state, { payload }) {
      const { data } = payload
      state.data = data
    },
    clearSearchData(state) {
      state.data = []
    },
    setQuery(state, { payload }) {
      const { query } = payload
      state.query = query
    },
    setVariantListy(state, { payload }) {
      const { variantList } = payload
      state.variantList = variantList
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchSearch.pending, state => {
      state.isLoading = true
      state.isSuccess = false
      state.errors = false
    })

    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = true
      state.errors = false
      state.data = payload
    })

    builder.addCase(fetchSearch.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isSuccess = false
      state.errors = true
    })
  }
})

export const { setSearchData, clearSearchData, setQuery, setVariantListy } =
  searchSlice.actions

export default searchSlice.reducer
