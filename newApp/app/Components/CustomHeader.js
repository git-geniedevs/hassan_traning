import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomHeader({
  Title,
  BtnLeft,
  BtnRight,
  Icon1,
  Icon2,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={BtnLeft}>
        <Ionicons name={Icon1} size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.Title}>{Title}</Text>
      <TouchableOpacity onPress={BtnRight}>
        <Ionicons name={Icon2} size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    height: 50,
    width: "100%",
  },
  Title: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },
});
