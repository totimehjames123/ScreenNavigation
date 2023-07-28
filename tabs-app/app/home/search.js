import { StyleSheet, Text, View, Button } from "react-native";
import { Link, Redirect, Stack } from "expo-router";

export default function search() {

  const users = [
    {
      name: 'Somename',
      username: 'somenameusername'
    },
    {
      name: 'Somebody',
      username: 'somebodyusername'
    }
]

  return (

    <View style={styles.container}>
      {/* <Stack.Screen options={{title: 'Home Screen'}}/> */}
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
      <Link href={'/James'}>Go to profile page --  James</Link>

      {users.map((user, index) => (
        <Link id={index} href={`/${user.username}`}> Open {user.name}'s profile</Link>
      ))}

      <Link href={{
        pathname: '/JohnAidoo',
        params: {
          name: 'John',
          surname: 'Aidoo'
        }
      }}>Go to profile --- John page</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
