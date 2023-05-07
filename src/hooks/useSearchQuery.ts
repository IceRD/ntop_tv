import api from '~/api'
import { useQuery } from '@tanstack/react-query'

interface IProps {
  query: string
}

const useSearchQuery = ({ query }: IProps) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: api.search.get({ query }),
    staleTime: 1000 * 60
  })
}

export { useSearchQuery }
