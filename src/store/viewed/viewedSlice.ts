import { createSlice } from '@reduxjs/toolkit'
import { ICard } from '~/types/card'

const MAX_VIEWED = 48

const viewedSlice = createSlice({
  name: 'viewed',
  initialState: {
    data: <ICard[]>[]
  },
  reducers: {
    setViewedData(state, { payload }) {
      const { movie } = payload

      let newData = [movie]

      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].movie_id === movie.movie_id) {
          continue
        }
        newData.push(state.data[i])
      }

      state.data = newData.slice(0, MAX_VIEWED)
    }
  }
})

export const { setViewedData } = viewedSlice.actions

export default viewedSlice.reducer
