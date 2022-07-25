import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

export const DiscoveryScreen = () => {
  return (
    <View style={Wrapper}>
      <Text>Discovery</Text>
    </View>
  )
}

