import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ItemSepratorComponent() {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
  },
});
