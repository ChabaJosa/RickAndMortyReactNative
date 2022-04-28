import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import Card from "./components/card";
//
export default function App() {
  // https://rickandmortyapi.com/api/character/?page=1
  const [data, setData] = useState(null);
  const counter = useRef(1);
  //
  useEffect(() => {
    reset();
  }, []);
  //
  async function getData() {
    const req = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${counter.current}`
    );
    const res = await req.json();
    // console.log(res)
    await setData(res.results);
    counter.current++;
  }
  //
  async function reset() {
    counter.current = 1;
    getData();
  }
  //
  if (data !== null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 32, fontStyle: "italic", color: "#2185d0" }}>
          Rick And Morty
        </Text>d
        <View style={{ marginTop: 16 }}>
          <Button onPress={getData} title="Next Page" color="#841584" />
        </View>
        <View style={{ marginTop: 16, marginBottom: -16 }}>
          <Button onPress={reset} title="Reset" color="#841584" />
        </View>
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
