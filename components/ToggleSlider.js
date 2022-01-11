import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

const ToggleSlider = () => {
  return (
    <View>
      <TouchableOpacity>style={styles.toggle}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    backgroundColor: "#fff",
  },
});

export default ToggleSlider;
