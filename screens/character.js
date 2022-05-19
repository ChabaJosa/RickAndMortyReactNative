import { StyleSheet, Text, View } from "react-native";
import React from "react";

function Character({ route }) {
  //
  const { data } = route.params;
  console.log(data);
  //
  return (
    <View>
      <Text>Character</Text>
    </View>
  );
}

export default Character;

const styles = StyleSheet.create({});
