import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { setStatusBarStyle } from "expo-status-bar";

function Character({ route }) {
  //
  const { data } = route.params;
  const [result, setResult] = useState(null);
  // console.log(data);
  //
  useEffect(() => {
    helper();
  }, []);
  //
  async function helper() {
    const req = await fetch(
      `https://rickandmortyapi.com/api/character/${data.id}`
    );
    const res = await req.json();
    console.log(res);
    await setResult(res);
  }
  // https://rickandmortyapi.com/api/character/2
  //
  if (result !== null) {
    console.log('hereee -->', result)
    return (
      <View style={styles.container}>
        <Text>{result.name}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>

      </View>
    );
  }
}

export default Character;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'whitesmoke',

  }
});
