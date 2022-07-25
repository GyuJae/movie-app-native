import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

export const CommunityScreen = () => {
  return (
    <View style={Wrapper}>
      <Text>Community</Text>
    </View>
  )
}

