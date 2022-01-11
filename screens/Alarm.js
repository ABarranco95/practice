import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Alarm = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.text}>7:15am</Text>
      </View>
      <View>
        <Text style={styles.text}>7:50am</Text>
      </View>
      <View>
        <Text style={styles.text}>8:05am</Text>
      </View>
    </View>
  );
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
export default Alarm;
