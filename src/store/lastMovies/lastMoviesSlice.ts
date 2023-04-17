import { createSlice } from '@reduxjs/toolkit'
import { LastMoviesItem } from './lastMoviesSlice.types'

const MAX_MOVIES = 15

const getUniqueMovies = (movies, newMovie) => {
  if (newMovie === undefined) {
    return movies
  }

  const array = [newMovie]

  for (let i = 0, l = movies.length; i < l; i++) {
    if (movies[i].movie_id === newMovie.movie_id) {
      continue
    }

    array.push(movies[i])

    if (array.length >= MAX_MOVIES) {
      return array
    }
  }

  return array
}

const lastMoviesSlice = createSlice({
  name: 'lastMovies',
  initialState: {
    movies: []
  },
  reducers: {
    addMovies(state, { payload }: LastMoviesItem) {
      const { movie } = payload
      state.movies = getUniqueMovies(state.movies, movie)
    }
  }
})

export const { addMovies } = lastMoviesSlice.actions

export default lastMoviesSlice.reducer
