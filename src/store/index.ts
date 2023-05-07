import { configureStore } from '@reduxjs/toolkit'
import focusReducer from './focusSlice/focusSlice'
import lastMoviesReducer from './lastMovies/lastMoviesSlice'
import searchReducer from './search/searchSlice'

export const store = configureStore({
  reducer: {
    focus: focusReducer,
    lastMovies: lastMoviesReducer,
    search: searchReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
