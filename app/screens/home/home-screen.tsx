import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

export const HomeScreen = () => {
  return (
    <View style={Wrapper}>
      <Text>Home</Text>
    </View>
  )
}

