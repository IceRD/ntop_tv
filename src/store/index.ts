import { configureStore } from '@reduxjs/toolkit'
import focusReducer from './focusSlice/focusSlice'

const store = configureStore({
  reducer: {
    focus: focusReducer
  }
})

export default store
