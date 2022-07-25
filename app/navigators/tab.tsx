import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { capitalize  } from "validate.js"
import { 
  HomeScreen,
  DiscoveryScreen,
  CommunityScreen,
  SearchScreen
} from "../screens"
import { color } from "../theme"
import { Ionicons } from "@expo/vector-icons";


export type TabParamsList = {
  home: undefined
  discovery: undefined
  community: undefined
  search: undefined
}

const Tab = createBottomTabNavigator<TabParamsList>()

export const AppTab = () => {
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
        name={'home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='home' color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name={'discovery'}
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='compass' color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name={'community'}
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='chatbubbles' color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name={'search'}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='search' color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}