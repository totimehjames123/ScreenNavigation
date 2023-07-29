import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const messages = () => {
  return (
    <View>
      <Link href="home/messages/232">messages with Lukas</Link>
      <Link href="home/messages/234">messages with Lukas</Link>
      <Link href="home/messages/123">messages with Lukas</Link>
    </View>
  )
}

export default messages