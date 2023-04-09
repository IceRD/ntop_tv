import api from '~/api'
import { useQuery } from '@tanstack/react-query'

const useTopMoviesQuery = () => {
  return useQuery({
    queryKey: ['topMovies'],
    queryFn: api.topMovies.get,
    staleTime: 1000 * 60
  })
}

export { useTopMoviesQuery }
