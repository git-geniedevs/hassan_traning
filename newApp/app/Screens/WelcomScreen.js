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
import MyButton from "../Components/MyButton";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/back.jpg")}
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
          source={require("../assets/logo.png")}
          style={{ width: 70, height: 70, borderRadius: 30 }}
        />
        <Text style={{ fontSize: 15, color: "black", fontWeight: "700" }}>
          Welcome to App
        </Text>
      </View>
      <View style={styles.buttons}>
        <MyButton
          Title="Image Screen"
          onPress={() => {
            navigation.navigate("ImageScreen");
          }}
        />
        <MyButton
          Title="User Screen"
          onPress={() => {
            navigation.navigate("UserScreen");
          }}
        />
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
  buttons: {
    padding: 5,
    marginHorizontal: 20,
  },
});
