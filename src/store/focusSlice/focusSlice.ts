import { createSlice } from '@reduxjs/toolkit'
import FocusType from './focusSlice.types'

const focuseSlice = createSlice({
  name: 'focus',
  initialState: {
    currentFocus: ''
  },
  reducers: {
    setFocusMenu(state) {
      state.currentFocus = FocusType.menu
    },
    setFocusContent(state) {
      state.currentFocus = FocusType.content
    }
  }
})

export const { setFocusMenu, setFocusContent } = focuseSlice.actions

export default focuseSlice.reducer
