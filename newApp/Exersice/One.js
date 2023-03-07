import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function One() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/200/300",
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 60,
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 60,
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
              fontSize: 20,
              color: "white",
            }}
          >
            Go to Two
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 1 : null,
  },
  imageView: {
    width: 400,
    height: 400,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});
