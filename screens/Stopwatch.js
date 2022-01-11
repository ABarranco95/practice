import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

const Stopwatch = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.text}>00:00.00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
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
    fontSize: 70,
    textAlign: "center",
    paddingTop: 150,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "green",
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
export default Stopwatch;
