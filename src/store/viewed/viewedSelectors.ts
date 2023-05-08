import { createSelector } from '@reduxjs/toolkit'

const selectSelf = state => state.viewed

export const viewedData = createSelector(selectSelf, viewed => {
  return viewed.data
})
