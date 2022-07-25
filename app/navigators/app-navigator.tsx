/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppTab, TabParamsList } from "./tab";
import { AppStack, StackParamList } from "./stack";

export type NavParamsList = {
  tab: TabParamsList,
  stack: StackParamList
}

const Nav = createNativeStackNavigator<NavParamsList>();

const AppNav = () => {
  return (
    <Nav.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
      <Nav.Screen name="tab" component={AppTab} />
      <Nav.Screen name="stack" component={AppStack} />
    </Nav.Navigator>
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
      <AppNav />
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
