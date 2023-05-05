import { createSlice } from '@reduxjs/toolkit'
import { LastMoviesItem } from './lastMoviesSlice.types'

const MAX_MOVIES = 15

const getUniqueMovies = (movies, newMovie) => {
  if (newMovie === undefined) {
    return movies
  }

  let nm = JSON.parse(JSON.stringify(newMovie))

  delete nm.persones

  const array = [nm]

  for (let i = 0, l = movies.length; i < l; i++) {
    const movie = movies[i]

    if (movie.movie_id === nm.movie_id) {
      continue
    }

    delete movie.persones

    array.push(movie)

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

      const m = getUniqueMovies(state.movies, movie)
      console.log(JSON.stringify({ m }, null, 2))

      state.movies = m
    }
  }
})

export const { addMovies } = lastMoviesSlice.actions

export default lastMoviesSlice.reducer
