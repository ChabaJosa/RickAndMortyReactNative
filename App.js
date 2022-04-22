 import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import Card from "./components/card";
//
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
  // console.log("Heree ", data);
  //
  if (data !== null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Rick And Morty</Text>
        <ScrollView
          contentContainerStyle={{
            // flex: 1,
            minHeight: 900,
            paddingVertical: 24,
          }}
        >
          {data.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </ScrollView>
      </SafeAreaView>
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
