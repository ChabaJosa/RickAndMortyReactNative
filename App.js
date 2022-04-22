import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  // https://rickandmortyapi.com/api/character/?page=1
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  //
  async function getData() {
    const req = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    const res = await req.json();
    // console.log(res)
    await setData(res.results);
  }
  //
  console.log("Heree ", data);
  //
  if (data !== null) {
    return (
      <View style={styles.container}> 
        {data.map((item, index) => {
          return <Text key={index}>{item.name}</Text>;
        })}
      </View>
    );
  } else {
    return <Text>Loading...</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
