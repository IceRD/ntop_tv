import React, { useEffect } from 'react'
import { StatusBar, SafeAreaView, LogBox } from 'react-native'
import { useNavigationContainerRef } from '@react-navigation/native'
import NavigationContext from '~/context/navigation'
import MainNavigation from '~/navigations/MainNavigation'
import { Provider as ReduxProvider } from 'react-redux'
import store, { persistor } from '~/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  const navigationRef = useNavigationContainerRef()
  const queryClient = new QueryClient()

  // LogBox.ignoreLogs(['new NativeEventEmitter'])
  LogBox.ignoreAllLogs()

  useEffect(() => {
    SplashScreen.hide()
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" hidden={true} />
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContext.Provider value={{ navigationRef }}>
              <MainNavigation />
            </NavigationContext.Provider>
          </PersistGate>
        </ReduxProvider>
      </QueryClientProvider>
    </SafeAreaView>
  )
}

export default App
