import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WorldClock from "./screens/WorldClock";
import Alarm from "./screens/Alarm";
import Stopwatch from "./screens/Stopwatch";
import Timer from "./screens/Timer";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="WorldClock">
      <Tab.Screen name="WorldClock" component={WorldClock} />
      <Tab.Screen name="Alarm" component={Alarm} />
      <Tab.Screen name="Stopwatch" component={Stopwatch} />
      <Tab.Screen name="Timer" component={Timer} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
