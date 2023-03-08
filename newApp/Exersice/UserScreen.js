import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  Image,
} from "react-native";

export default function UserScreen() {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUsers(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchUsers();
    setRefreshing(false);
  };

  //   const handleSearch = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://dummyjson.com/users/api/users?search=${searchQuery}`
  //       );
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const renderItemComponent = (item) => {
    <View
      style={{
        flexDirection: "row",

        alignItems: "center",
        backgroundColor: "white",

        width: 370,
        height: 40,

        marginTop: 10,
        justifyContent: "space-evenly",
      }}
    >
      <Image
        style={{ width: 40, height: 40, borderRadius: 30 }}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
      <View style={{ justifyContent: "center", width: "60%" }}>
        <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 13, fontWeight: "300", color: "black" }}>
          {item.email}
        </Text>
      </View>
    </View>;
  };

  return (
    <View onScroll={onRefresh} style={styles.container}>
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
          backgroundColor: "gray",
          borderRadius: 30,
          width: 300,
          height: 40,
          alignContent: "center",
          marginTop: 5,
          justifyContent: "center",

          left: 50,
          right: 50,
          elevation: 6,
        }}
      >
        <TextInput
          placeholder="Search user"
          placeholderTextColor="white"
          style={{
            width: "100%",
            height: "100%",
            paddingHorizontal: 30,
          }}
        />
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => renderItemComponent(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 2 : null,
  },
});
