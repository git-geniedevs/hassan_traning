import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Two() {
  const navigation = useNavigation();
  const imageClicked = () => {
    Alert.alert("Image", "This is my Image", [
      {
        text: "Yes",
        onPress: () => {
          console.log("Okay");
        },
      },

      {
        text: "No",
        onPress: () => {
          console.log("No");
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <TouchableOpacity onPress={imageClicked}>
            <Image
              source={{
                width: 100,
                height: 100,
                uri: "https://picsum.photos/200/300",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("WelcomeScreen");
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
              Welcome Screen
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserScreen");
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
              User Screen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ImageScreen");
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
              Image View Screen
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Hi</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 1 : null,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
});
