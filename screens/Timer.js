import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = () => {
  return <View style={styles.main}></View>;
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#000",
    width: 395,
    height: 812,
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});

export default Timer;
