import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import WorldClock from "./screens/WorldClock";
import Alarm from "./screens/Alarm";
import Stopwatch from "./screens/Stopwatch";
import Timer from "./screens/Timer";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="WorldClock"
      tabBarOptions={{
        activeTintColor: "gold",
        inactiveTintColor: "#fff",
        activeBackgroundColor: "#000",
        inactiveBackgroundColor: "#000",
        style: {
          backgroundColor: "#000",
          // shadowColor: "transparent",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "WorldClock") {
            iconName = "time-outline";
          } else if (route.name == "Alarm") {
            iconName = "alarm-outline";
          } else if (route.name == "Stopwatch") {
            iconName = "stopwatch-outline";
          } else if (route.name == "Timer") {
            iconName = "timer-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="WorldClock"
        component={WorldClock}
        options={{
          title: "World Clock",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 28,
          },
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          title: "Alarm",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 28,
          },
        }}
      />
      <Tab.Screen
        name="Stopwatch"
        component={Stopwatch}
        options={{
          title: "Stopwatch",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 28,
          },
        }}
      />
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          title: "Timer",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 28,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs style={styles.container} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
});
