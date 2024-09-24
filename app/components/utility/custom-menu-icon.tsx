import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

interface CustomMenuIconProps {
  onPress?: () => void;
}

function CustomMenuIcon({ onPress }: CustomMenuIconProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.line1} />
      <View style={styles.line2} />
      <View style={styles.line3} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 5,
  },
  line1: {
    width: 20,
    height: 4,
    backgroundColor: "#000",
    marginBottom: 5,
    borderRadius: 5,
  },
  line2: {
    width: 30,
    height: 4,
    backgroundColor: "#000",
    marginBottom: 5,
    borderRadius: 5,
  },
  line3: {
    width: 40,
    height: 4,
    backgroundColor: "#000",
    borderRadius: 5,
  },
});

export default CustomMenuIcon;
