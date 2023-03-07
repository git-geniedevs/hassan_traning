import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import React from "react";

export default function One() {
  return (
    <View>
      <Text>One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : null,
  },
});
