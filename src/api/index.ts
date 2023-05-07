import movie from './movie/movie'
import newMovies from './newMovies/newMovies'
import topMovies from './topMovies/topMovies'
import catalog from './catalog/catalog'
import search from './search/search'

const api = () => ({
  movie,
  newMovies,
  topMovies,
  catalog,
  search
})

export default api()
