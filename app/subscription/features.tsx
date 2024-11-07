import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Make sure you have @expo/vector-icons installed

import { useFonts, AnekBangla_500Medium } from "@expo-google-fonts/anek-bangla";

const Features = () => {
  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ক্ষুদ্র প্রকল্পের সুবিধা</Text>
      <FeatureItem text="একই সাথে ৩ টি প্রকল্পের হিসাব রাখতে পারবেন" />
      <FeatureItem text="প্রতিটি দিখীতে একাধিক চাষ করুন" />
      <FeatureItem text="সহজেই আপনার আয়-ব্যায় হিসাব খুঁজে পাবেন" />
      <FeatureItem text="প্রতিটি দিখীতে একাধিক চাষ করুন" />
      <FeatureItem text="সহজেই আপনার আয়-ব্যায় হিসাব খুঁজে পাবেন" />
    </View>
  );
};

const FeatureItem = ({ text }: any) => {
  return (
    <View style={styles.featureItem}>
      <MaterialIcons name="grid-view" size={24} color="#0A0F9C" />
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "rgba(20, 31, 116, 1)",
    marginBottom: 15,
    fontFamily: "AnekBangla_500Medium",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  featureText: {
    fontSize: 15,
    color: "rgba(20, 31, 116, 1)",
    marginLeft: 10,
    fontFamily: "AnekBangla_500Medium",
  },
});

export default Features;
