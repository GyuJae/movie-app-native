import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { StackParamList } from '../../navigators/stack'

const Wrapper: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

type Props = NativeStackScreenProps<StackParamList, 'movie'>

export const MovieScreen = ({ route }:Props) => {
  console.log(route)
  return (
    <View style={Wrapper}>
      <Text>Movie</Text>
    </View>
  )
}

