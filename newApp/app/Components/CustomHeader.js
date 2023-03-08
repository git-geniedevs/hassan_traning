import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CustomHeader({ Title, Btn1, Btn2 }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 5,
      }}
    >
      <TouchableOpacity onPress={Btn1}>
        <Ionicons name="chevron-back" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.Title}>{Title}</Text>
      <TouchableOpacity onPress={Btn2}>
        <Ionicons name="ellipsis-vertical-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
  },
});
