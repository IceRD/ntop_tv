import { createSlice } from '@reduxjs/toolkit'
import { ICard } from '~/types/card'

const MAX_VIEWED = 48

const viewedSlice = createSlice({
  name: 'viewed',
  initialState: {
    viewedData: <ICard[]>[]
  },
  reducers: {
    setViewedData(state, { payload }) {
      const { movie } = payload
      let newData = [movie]

      for (let i = 0; i < state.viewedData.length; i++) {
        if (
          state.viewedData[i].movie_id === movie.movie_id ||
          i >= MAX_VIEWED
        ) {
          continue
        }
        newData.push(state.viewedData[i])
      }

      state.viewedData = newData
    }
  }
})

export const { setViewedData } = viewedSlice.actions

export default viewedSlice.reducer
