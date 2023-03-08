import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function MyButton({ onPress, Title, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.title}>{Title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "blue",
    elevation: 10,
    borderRadius: 30,
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});
