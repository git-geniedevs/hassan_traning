import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function One() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../app/assets/back.jpg")}
    >
      <View
        style={{
          position: "absolute",
          top: 40,
          left: 50,
          right: 50,
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../app/assets/logo.png")}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <Text style={{ fontSize: 14, color: "black", fontWeight: "700" }}>
          Welcome to App
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Two");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "white",
            }}
          >
            Go to Two
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 1 : null,
    justifyContent: "flex-end",
  },
});
