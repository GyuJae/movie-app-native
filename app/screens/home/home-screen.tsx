import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

type Props = NativeStackScreenProps<any, 'home'>

export const HomeScreen = ({ navigation: {navigate}}:Props) => {
  return (
    <View style={Wrapper}>
      <TouchableOpacity onPress={() => navigate('stack', { screen: 'movie', params: { id: "3" }})}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

