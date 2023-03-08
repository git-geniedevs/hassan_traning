import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../Components/CustomHeader";

export default function UserDetailScreen({ route }) {
  const navigation = useNavigation();
  const [user, setUser] = useState(route.params.item);
  return (
    <SafeAreaView style={styles.container}>
      {/* custom header */}
      <CustomHeader
        Title="My Profile"
        Btn1={() => {
          navigation.goBack();
        }}
      />
      <Pressable style={styles.ListView}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 40 }}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <View style={{ justifyContent: "center", width: "60%" }}>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }}>
            {user.name}
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "300", color: "black" }}>
            {user.email}
          </Text>
        </View>
        <AntDesign
          name="edit"
          size={18}
          color="black"
          onPress={() => {
            console.log("Edit Profile");
          }}
        />
      </Pressable>
      <View style={{ flexWrap: "wrap" }}>
        <Text style={{ textAlign: "left", marginLeft: 30 }}>My Status</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            margin: 4,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "black",
              borderRadius: 50,
              width: 100,
              height: 40,
              padding: 5,
              elevation: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Good Morning</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "tomato",
              borderRadius: 50,
              width: 100,
              height: 40,
              padding: 5,
              elevation: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Away</Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "pink",
              borderRadius: 50,
              width: 100,
              height: 40,
              padding: 5,
              elevation: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}> At Work</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    backgroundColor: "white",
  },
  ListView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 100,
    marginTop: 20,
    justifyContent: "space-evenly",
  },
});
