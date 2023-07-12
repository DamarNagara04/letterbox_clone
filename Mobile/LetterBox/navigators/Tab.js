import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MainStack from "./MainStack";
import { Ionicons } from "@expo/vector-icons";
import Journals from "../screens/JournalPage";
import Lists from "../screens/ListPage";
import Reviews from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

// const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Dashboard") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Reviews") {
              iconName = focused ? "pencil" : "pencil-outline";
            } else if (route.name === "List") {
              iconName = focused ? "layers" : "layers-outline";
            } else if (route.name === "Journal") {
              iconName = focused ? "book" : "book-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // tabBarLabelStyle: { color: "teal" },
          activeTintColor: "green", // Set the active icon color to green
          inactiveTintColor: "white", // Set the inactive icon color to white
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#445565", // Set the background color of the tab bar
          },
        };
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={MainStack} // nested navigator
      />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="List" component={Journals} />
      <Tab.Screen name="Journal" component={Lists} />
    </Tab.Navigator>
  );
}
