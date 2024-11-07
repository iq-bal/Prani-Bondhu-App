import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecordHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>লেনদেনের রেকর্ড</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#5A55E2", // Adjust this color as per your design
    borderTopLeftRadius: 30, // Rounded corners
    borderBottomLeftRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignSelf: "flex-end", // Adjust if you want to change alignment
    marginVertical: 10, // Add margin as needed
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RecordHeader;
