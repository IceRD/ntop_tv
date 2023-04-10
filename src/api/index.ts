import movie from './movie/movie'
import newMovies from './newMovies/newMovies'
import topMovies from './topMovies/topMovies'
import catalog from './catalog/catalog'

const api = () => ({
  movie,
  newMovies,
  topMovies,
  catalog
})

export default api()
