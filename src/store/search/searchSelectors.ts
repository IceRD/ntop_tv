import { createSelector } from '@reduxjs/toolkit'

const selectSelf = state => state.search

export const searchData = createSelector(selectSelf, search => {
  return search.data
})
