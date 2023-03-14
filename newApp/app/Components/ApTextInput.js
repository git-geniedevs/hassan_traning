import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ApTextInput({ icon, ...otherprops }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={18} />
      <TextInput style={styles.input} {...otherprops} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    width: "100%",
  },
  input: {
    padding: 20,
    justifyContent: "center",
  },
});
