import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthNavigator } from './auth-navigator'
import { AppNavigator } from './app-navigator'

const Stack = createStackNavigator()

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Auth" headerMode="none">
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  )
}
