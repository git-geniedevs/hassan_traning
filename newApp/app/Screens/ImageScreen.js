import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", left: 30, top: 40 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ position: "absolute", right: 30, top: 40 }}>
        <TouchableOpacity
          onPress={() => {
            console.log("delete Pressed");
          }}
        >
          <Ionicons name="trash" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require("../assets/back.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    backgroundColor: "black",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 450,
  },
});
