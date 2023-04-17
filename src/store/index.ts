import { configureStore } from '@reduxjs/toolkit'
import focusReducer from './focusSlice/focusSlice'
import lastMoviesReducer from './lastMovies/lastMoviesSlice'

export const store = configureStore({
  reducer: {
    focus: focusReducer,
    lastMovies: lastMoviesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
