import React from "react";
import { View, StyleSheet, Text, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
});
