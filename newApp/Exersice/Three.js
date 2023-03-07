import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Three() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "red",
          position: "absolute",
          right: 30,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("One");
          }}
        >
          <Text
            style={{
              fontSize: 10,
            }}
          >
            Go One
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: "blue",
          position: "absolute",
          left: 30,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              fontSize: 10,
            }}
          >
            GoBack
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", height: "70%" }}>
        <Image
          style={{ width: 500, height: 400, resizeMode: "stretch" }}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
