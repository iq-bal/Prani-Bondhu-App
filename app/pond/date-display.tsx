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

const DateDisplay = () => {
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
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>২৫শে জুলাই, ২০২৪</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: "rgba(0,0,0,1)",
    fontFamily: "AnekBangla_500Medium",
  },
});

export default DateDisplay;
