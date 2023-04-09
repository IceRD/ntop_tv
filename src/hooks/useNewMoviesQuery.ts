import api from '~/api'
import { useQuery } from '@tanstack/react-query'

const useNewMoviesQuery = () => {
  return useQuery({
    queryKey: ['newMovies'],
    queryFn: api.newMovies.get,
    staleTime: 1000 * 60
  })
}

export { useNewMoviesQuery }
