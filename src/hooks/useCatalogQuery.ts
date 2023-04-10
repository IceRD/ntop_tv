import api from '~/api'
import { useQuery } from '@tanstack/react-query'

interface IProps {
  page?: number
  genre?: string
}

function useCatalogQuery(payload: IProps) {
  return useQuery({
    queryKey: ['catalog'],
    queryFn: () => api.catalog.get(payload),
    staleTime: 1000 * 60
  })
}

export { useCatalogQuery }
