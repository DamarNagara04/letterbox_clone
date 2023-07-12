import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Journals() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Add your header content here */}
        <Ionicons name="menu" size={25} color="white" style={styles.icon} />
        <Text style={styles.headerText}>Popular</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name="search" size={20} color="white" style={styles.icon} />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Journal Screen!</Text>
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
});
