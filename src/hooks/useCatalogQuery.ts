import api from '~/api'
import { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useCatalogQuery = ({ genre }) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['catalog', genre],
      ({ pageParam = 0 }) => api.catalog.get({ pageParam, genre }),
      {
        staleTime: 0,
        getNextPageParam: lastPage => {
          const total = Number(lastPage.total)
          const pagesize = Number(lastPage.pagesize)
          const offset = Number(lastPage.offset)
          const pageParam = Number(lastPage.pageParam)

          console.log(total, pagesize, offset)

          if (total > pagesize + offset && pagesize > 0) {
            return pageParam + 1
          }

          return false
        }
      }
    )

  const catalog = useMemo(
    () =>
      data?.pages.reduce((acc, curr) => {
        acc.push(...curr.movies)

        return acc
      }, []),
    [data]
  )

  return {
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    catalog
  }
}
