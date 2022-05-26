import { StyleSheet, Text, View } from "react-native";
import React, {useEffect} from "react";

function Character({ route }) {
  //
  const { data } = route.params;
  // console.log(data); 
  //
  useEffect(() => {
      helper()
  }, [])
  //
  async function helper(){
      const req = await  fetch('https://rickandmortyapi.com/api/character/2')
      const res = await req.json();
      console.log(res)
      // await setData(res.results);
      // counter.current++;
  }
  // https://rickandmortyapi.com/api/character/2
  //
  return (
    <View>
      <Text>Character</Text>
    </View>
  );
}

export default Character;

const styles = StyleSheet.create({});
