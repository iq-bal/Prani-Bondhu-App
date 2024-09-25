import { AnekBangla_500Medium, useFonts } from "@expo-google-fonts/anek-bangla";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryButtons = () => {
  let [isLoaded] = useFonts({
    AnekBangla_500Medium,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* First Button: Highlighted */}
      <TouchableOpacity style={[styles.button, styles.highlightedButton]}>
        <Text style={[styles.buttonText, styles.highlightedButtonText]}>
          আয় সমূহ
        </Text>
      </TouchableOpacity>

      {/* Second Button: Regular */}
      <TouchableOpacity style={[{ ...styles.button, marginRight: 0 }]}>
        <Text style={styles.buttonText}>ব্যয় সমূহ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10, // Adds some space above the buttons
    marginBottom: 20,
  },
  button: {
    flex: 1, // Ensure buttons take up equal space
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginRight: 5, // Space between the buttons
  },
  highlightedButton: {
    borderWidth: 2,
    borderColor: "rgba(86, 103, 229, 1)", // Blue border
  },
  buttonText: {
    fontSize: 14,
    color: "#000",
    fontFamily: "AnekBangla_500Medium",
  },
  highlightedButtonText: {
    color: "rgba(86, 103, 229, 1)", // Blue text
  },
});

export default CategoryButtons;
