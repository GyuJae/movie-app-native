import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MovieScreen } from "../screens/movie/movie-screen"
import { TVScreen } from '../screens/tv/tv-screen'

export type StackParamList = {
  movie: { id: string },
  tv: { id: string }
}

const Stack = createNativeStackNavigator<StackParamList>()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='movie' component={MovieScreen} />
      <Stack.Screen name='tv' component={TVScreen} />
    </Stack.Navigator>
  )
}
