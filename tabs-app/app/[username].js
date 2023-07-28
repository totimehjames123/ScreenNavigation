import React from 'react'
import {View, Text, Button} from 'react-native'
import { useRouter, useSearchParams, Stack } from 'expo-router'

function profile() {
    const router = useRouter()
    const {name, username} = useSearchParams()

  return (
    <View>
        <Stack.Screen options={{title: username}}/>
        <Text>profile Page</Text>
        <Text>Hi I'm {name} (@{username})</Text>
        <Button title='Go back' onPress={() => router.back()} />
    </View>
  )
}

export default profile