import { Stack } from "expo-router";

export default () => {
    return <Stack> 
            <Stack.Screen name="index" options={{title: 'Messages'}}/>
            <Stack.Screen name="[id]" options={{title: 'Messages Room'}}/>
        </Stack>

}