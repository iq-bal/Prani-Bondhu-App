import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {
  useFonts,
  AnekBangla_100Thin,
  AnekBangla_200ExtraLight,
  AnekBangla_300Light,
  AnekBangla_400Regular,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
  AnekBangla_700Bold,
  AnekBangla_800ExtraBold,
} from "@expo-google-fonts/anek-bangla";

const RecordHeader = () => {
  let [fontsLoaded] = useFonts({
    AnekBangla_100Thin,
    AnekBangla_200ExtraLight,
    AnekBangla_300Light,
    AnekBangla_400Regular,
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
    AnekBangla_700Bold,
    AnekBangla_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>লেনদেনের রেকর্ড</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#5A55E2", // Adjust this color as per your design
    borderTopLeftRadius: 100, // Rounded corners
    borderBottomLeftRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: "flex-end", // Adjust if you want to change alignment
    marginVertical: 10, // Add margin as needed
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 25,
    // fontWeight: "bold",
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default RecordHeader;
