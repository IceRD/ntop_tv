import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationContext from '~/context/navigation'
import { ROUTE_COMPONENTS, defaultRoute } from '~/router/routes'
import { DefaultLayout } from '~/layouts'
import { Colors } from '~/theme'
import { StackName } from '../Navigation.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'

const RootStack = createNativeStackNavigator()
const StackLayout = createNativeStackNavigator()

const navigationContainerTheme = {
  colors: {
    background: Colors.mainBackground
  }
}

const stackNavigatorOptions = {
  headerShown: false
}

const stackScreenOptions = {
  headerShown: false,
  presentation: 'modal',
  animationTypeForReplace: 'push',
  animation: 'fade'
}

const ScreenWithLayoutNavigation = function () {
  return (
    <DefaultLayout>
      <StackLayout.Navigator
        screenOptions={stackNavigatorOptions}
        initialRouteName={defaultRoute}>
        <StackLayout.Screen
          name={ROUTE_COMPONENTS.categories.name}
          component={ROUTE_COMPONENTS.categories.component}
          options={stackScreenOptions}
        />
        <StackLayout.Screen
          name={ROUTE_COMPONENTS.catalog.name}
          component={ROUTE_COMPONENTS.catalog.component}
          options={stackScreenOptions}
        />
        <StackLayout.Screen
          name={ROUTE_COMPONENTS.newmovie.name}
          component={ROUTE_COMPONENTS.newmovie.component}
          options={stackScreenOptions}
        />
        <StackLayout.Screen
          name={ROUTE_COMPONENTS.topmovie.name}
          component={ROUTE_COMPONENTS.topmovie.component}
          options={stackScreenOptions}
        />
        <StackLayout.Screen
          name={ROUTE_COMPONENTS.search.name}
          component={ROUTE_COMPONENTS.search.component}
          options={stackScreenOptions}
        />
        <StackLayout.Screen
          name={ROUTE_COMPONENTS.viewed.name}
          component={ROUTE_COMPONENTS.viewed.component}
          options={stackScreenOptions}
        />

        <StackLayout.Screen
          name={ROUTE_COMPONENTS.card.name}
          component={ROUTE_COMPONENTS.card.component}
          options={stackScreenOptions}
        />
      </StackLayout.Navigator>
    </DefaultLayout>
  )
}

const MainNavigation = function () {
  const { navigationRef } = useNavigationRef()

  return (
    <NavigationContainer ref={navigationRef} theme={navigationContainerTheme}>
      <RootStack.Navigator
        initialRouteName={StackName.root}
        screenOptions={stackNavigatorOptions}>
        <RootStack.Screen
          name={StackName.root}
          component={ScreenWithLayoutNavigation}
        />
        <RootStack.Screen
          name={ROUTE_COMPONENTS.videoplayer.name}
          component={ROUTE_COMPONENTS.videoplayer.component}
          options={stackScreenOptions}
          onFocus={() => console.log('onFocus screen')}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
