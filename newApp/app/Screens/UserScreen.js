import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  StatusBar,
  Image,
  Pressable,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//Dummy User Data

// const users = [
//   {
//     id: "1",
//     name: "Earnest Green",
//   },
//   {
//     id: "2",
//     name: "Winston Orn",
//   },
//   {
//     id: "3",
//     name: "Carlton Collins",
//   },
//   {
//     id: "4",
//     name: "Malcolm Labadie",
//   },
//   {
//     id: "5",
//     name: "Michelle Dare",
//   },
//   {
//     id: "6",
//     name: "Carlton Zieme",
//   },
//   {
//     id: "7",
//     name: "Jessie Dickinson",
//   },
//   {
//     id: "8",
//     name: "Julian Gulgowski",
//   },
//   {
//     id: "9",
//     name: "Ellen Veum",
//   },
//   {
//     id: "10",
//     name: "Lorena Rice",
//   },

//   {
//     id: "11",
//     name: "Carlton Zieme",
//   },
//   {
//     id: "12",
//     name: "Jessie Dickinson",
//   },
//   {
//     id: "13",
//     name: "Julian Gulgowski",
//   },
//   {
//     id: "14",
//     name: "Ellen Veum",
//   },
//   {
//     id: "15",
//     name: "Lorena Rice",
//   },
// ];

export default function UserScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //Refresh function
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  // Fetch Function

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setLoading(false);
        setUsers(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Fetching Users from API in UseEffeect after rendering UI

  useEffect(() => {
    fetchUsers();
  }, []);

  // Search users Function
  // const handleSearch = (searchQuery) => {
  //   try {
  //     fetch(`https://dummyjson.com/users/api/users?search=${searchQuery}`);
  //     setUsers(users);
  //     setSearchQuery("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <>
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate("UserDetailScreen", { item });
              }}
              style={styles.ListView}
            >
              <Image
                style={{ width: 40, height: 40, borderRadius: 30 }}
                source={{ uri: "https://picsum.photos/200/300" }}
              />
              <View style={{ justifyContent: "center", width: "60%" }}>
                <Text
                  style={{ fontSize: 17, fontWeight: "600", color: "black" }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 13, fontWeight: "300", color: "black" }}
                >
                  {item.email}
                </Text>
              </View>
            </Pressable>
          </>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.searchView}>
              <TextInput
                placeholder="Search user"
                placeholderTextColor="white"
                value={searchQuery}
                // onChangeText={}
                style={{
                  width: "100%",
                  height: "100%",
                  paddingHorizontal: 30,
                }}
              />
            </View>

            {loading ? (
              <ActivityIndicator
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
                color="red"
                size={20}
              />
            ) : null}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
  searchView: {
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
  },
  ListView: {
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "white",

    width: 370,
    height: 40,

    marginTop: 20,
    justifyContent: "space-evenly",
  },
});
