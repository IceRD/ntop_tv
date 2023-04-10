import api from '~/api'
import { useQuery } from '@tanstack/react-query'

interface IProps {
  movie_id: string | number
}

function useMovieQuery({ movie_id }: IProps) {
  return useQuery({
    queryKey: ['movie', movie_id],
    queryFn: () => api.movie.get({ movie_id }),
    staleTime: 1000 * 60
  })
}

export { useMovieQuery }
