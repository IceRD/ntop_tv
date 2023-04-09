import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { useNavigationContainerRef } from '@react-navigation/native'
import NavigationContext from '~/context/navigation'
import MainNavigation from '~/navigations/MainNavigation'
import { Provider as ReduxProvider } from 'react-redux'
import store from '~/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  const navigationRef = useNavigationContainerRef()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" hidden={true} />
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <NavigationContext.Provider value={{ navigationRef }}>
            <MainNavigation />
          </NavigationContext.Provider>
        </ReduxProvider>
      </QueryClientProvider>
    </SafeAreaView>
  )
}

export default App
