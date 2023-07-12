import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Lists() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Add your header content here */}
        <Ionicons name="menu" size={25} color="white" style={styles.icon} />
        <Text style={styles.headerText}>Popular</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name="search" size={20} color="white" style={styles.icon} />
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://a.ltrbxd.com/sm/upload/dm/n8/6w/6l/BLB_1.jpeg?k=f4365e446e",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>The Godfather of Queer</Text>
          <Text style={styles.cardDescription}>
            A catch-up with revolutionary Canadian filmmaker Bruce LaBruce
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://a.ltrbxd.com/sm/upload/gq/2m/b0/f7/IMG_0183%20(2).jpg?k=0841713603",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>The Life Obsessive</Text>
          <Text style={styles.cardDescription}>
            Jack Moulton matches up each Wes Anderson film with Letterboxd list.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14181C",
  },
  header: {
    height: 90,
    backgroundColor: "#445565",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //  paddingHorizontal: 16,
    paddingStart: 16,
    paddingEnd: 5,
    paddingTop: 10,
    //  justifyContent: "center",
    //  alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingStart: 20,
  },
  card: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: "#2E3944",
    borderRadius: 8,
    overflow: "hidden", // Clip the content inside the card
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    color: "white",
    fontSize: 12,
  },
});
