import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'

const messageRoom = () => {
  const {id}  = useSearchParams()

  return (
    <View>
      <Text>MessageRoom with id : {id}</Text>
    </View>
  )
}

export default messageRoom