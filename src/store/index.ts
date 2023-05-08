import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { isDevelopment } from '~/utils/environment'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import searchReducer from './search/searchSlice'
import viewedReducer from './viewed/viewedSlice'
import focusReducer from './focusSlice/focusSlice'

// if (isDevelopment) {
//   AsyncStorage.clear()
// }

const rootReducer = combineReducers({
  search: searchReducer,
  viewed: viewedReducer,
  focus: focusReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['search', 'viewed']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ['viewedData']
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store
