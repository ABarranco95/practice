import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorldClock = () => {
  return (
    <View style={styles.main}>
      <View>
        <View style={styles.timeContainer}>
          <Text style={styles.text}>1:27pm</Text>
          <View>
            <Text style={styles.location}>Cupertino</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.text}>4:27pm</Text>
          <View>
            <Text style={styles.location}>New York</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.text}>4:27pm</Text>
          <View>
            <Text style={styles.location}>Chicago</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#000",
    width: 395,
    height: 812,
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 32,
  },
  timeContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignContent: "flex-end",
    borderWidth: 1,
    borderTopColor: "grey",
    borderBottomColor: "grey",
    paddingBottom: 20,
    paddingTop: 20,
  },
  location: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WorldClock;
