import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

export default function Item({
  Title,
  SubTitle,
  image,
  onPress,
  IconComponent,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.ListView}>
        <View style={styles.imageView}>
          {IconComponent}
          {image && (
            <Image
              style={{ width: 60, height: 60, borderRadius: 30 }}
              source={image}
            />
          )}
        </View>

        <View style={styles.detailsView}>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }}>
            {Title}
          </Text>
          {SubTitle && (
            <Text style={{ fontSize: 13, fontWeight: "300", color: "black" }}>
              {SubTitle}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ListView: {
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "white",

    marginTop: 5,

    marginBottom: 5,
    marginHorizontal: 30,
  },
  imageView: {},
  detailsView: {
    justifyContent: "center",
    width: "60%",
    marginLeft: 10,
  },
});
