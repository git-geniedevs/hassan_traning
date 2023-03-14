import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ children }) {
  return (
    <SafeAreaView style={[styles.MainContainer]}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
