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
  Dimensions,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomHeader from "../Components/CustomHeader";
import ListItems from "../Components/ListItems";
import Screen from "../Components/Screen";

export default function UserScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [searchOn, setSearchOn] = useState(false);

  // Fetch Function
  // https://jsonplaceholder.typicode.com/users

  const onFetch = () => {
    if (users.length < 6) {
      setLoading(true);
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setLoading(false);
          setUsers(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // ToastAndroid.show("No more new data available", ToastAndroid.SHORT);
      setRefreshing(false);
      console.log("No more data left");
    }
  };

  //Fetching Users from API in UseEffeect after rendering UI

  useEffect(() => {
    onFetch();
  }, [refreshing]);

  // Random Color Function for users

  const randomColor = () => {
    const generateRandomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${generateRandomColor}`;
  };

  // main return

  return (
    <Screen>
      <View>
        <View>
          {searchOn ? (
            <CustomHeader
              Title="Searching"
              Icon2="search"
              BtnRight={() => {
                setSearchOn(false);
                console.log("Searched clicked");
              }}
              BtnLeft={() => {
                console.log("Menu clicked");
              }}
            />
          ) : (
            <CustomHeader
              Title="Contacts"
              Icon1="md-menu-outline"
              Icon2="search"
              BtnRight={() => {
                setSearchOn(true);
                console.log("Searched clicked");
              }}
              BtnLeft={() => {
                console.log("Menu clicked");
              }}
            />
          )}
        </View>
        <FlatList
          data={users}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onFetch} />
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItems
              image={{ uri: item.avatar_url }}
              Title={item.login}
              SubTitle={item.html_url}
              onPress={() => {
                navigation.navigate("UserDetailScreen", { item });
              }}
              IconComponent={
                <View
                  style={{
                    position: "absolute",
                    backgroundColor: randomColor(),
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    right: 0,
                    bottom: 8,
                    zIndex: 1,
                  }}
                ></View>
              }
            />
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View>
              {loading ? (
                <ActivityIndicator
                  style={{
                    marginTop: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                  color="blue"
                  size="large"
                />
              ) : null}
            </View>
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
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
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "white",

    width: "100%",
    height: 60,

    marginTop: 20,
    justifyContent: "space-evenly",
  },
});

{
  /* <View style={styles.searchView}>
<TextInput
placeholder="Search user"
placeholderTextColor="white"
value={search}
// onChangeText={}
style={{
  width: "100%",
  height: "100%",
  paddingHorizontal: 30,
}}
/>
</View> */
}

// Search users Function
// const handleSearch = (searchQuery) => {
//   try {
//     fetch(`https://dummyjson.com/users/api/users?search=${search}`);
//     setUsers(users);
//     setSearchQuery("");
//   } catch (error) {
//     console.log(error);
//   }
// };
