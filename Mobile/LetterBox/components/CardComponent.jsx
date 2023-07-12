import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CardComponent({ user }) {
  const navigation = useNavigation();

  const goDetail = () => {
    //  console.log(
    //    user,
    //    "di card comp >>>>>>>>>>>>>>>>>>>>sadasdsa<<<<<<<<<<<<<<<<<"
    //  );
    navigation.navigate("Detail", { id: user?.id, dataMovie: user });
    //  navigation.navigate("Detail", { id: user?.id, data: user });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#283038",

        margin: 2,
        // alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center" }}
        onPress={goDetail}
      >
        <Image
          source={{ uri: user?.imgUrl }}
          style={{ width: 95, height: 140 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 5,
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
});
