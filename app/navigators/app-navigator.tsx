/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import {
  HomeScreen,
  DiscoveryScreen,
  CommunityScreen,
  SearchScreen
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { color } from "../theme"
import { capitalize } from "validate.js"
import { Ionicons } from "@expo/vector-icons";

// Tab Navigator
export type TabParamsList = {
  home: undefined
  discovery: undefined
  community: undefined
  search: undefined
}

const Tab = createBottomTabNavigator<TabParamsList>()

const AppTab = () => {
  return(
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarStyle: {
        backgroundColor: color.background,
      },
      tabBarInactiveTintColor: color.dim,
      tabBarActiveTintColor: color.primary,
      title: capitalize(route.name),
      headerShown: false 
    })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='home' color={color} size={size} />
          }
        }}
        name={'home'}
        component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='compass' color={color} size={size} />
          }
        }}
        name={'discovery'}
        component={DiscoveryScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='chatbubbles' color={color} size={size} />
          }
        }}
        name={'community'}
        component={CommunityScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='search' color={color} size={size} />
          }
        }}
        name={'search'}
        component={SearchScreen} />
    </Tab.Navigator>
  )
}


interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppTab />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["home"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
