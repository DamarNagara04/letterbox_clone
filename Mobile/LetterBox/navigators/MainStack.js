import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailPage from "../screens/DetailScreen";

import HomePage from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#445565",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
