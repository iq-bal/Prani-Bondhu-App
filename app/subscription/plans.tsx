import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Make sure you have this installed

import {
  useFonts,
  AnekBangla_600SemiBold,
  AnekBangla_500Medium,
} from "@expo-google-fonts/anek-bangla";

const PlanCard = ({ title, duration, price, isGradient }: any) => {
  let [fontsLoaded] = useFonts({
    AnekBangla_600SemiBold,
    AnekBangla_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return isGradient ? (
    <LinearGradient
      colors={["#90A0FF", "#2544FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.priceBadge}>
        <Text style={styles.priceText}>
          {price ? `${price}\nটাকা` : "ফ্রি"}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.duration}>{duration}</Text>
    </LinearGradient>
  ) : (
    <View style={[styles.card, styles.whiteCard]}>
      <View style={styles.priceBadge}>
        <Text style={styles.priceText}>
          {price ? `${price}\nটাকা` : "ফ্রি"}
        </Text>
      </View>
      <Text style={[styles.title, , { color: "rgba(20, 31, 116, 1)" }]}>
        {title}
      </Text>
      <Text style={[styles.duration, { color: "rgba(20, 31, 116, 1)" }]}>
        {duration}
      </Text>
    </View>
  );
};

const Plans = () => {
  const plans = [
    { title: "ক্ষুদ্র প্রকল্প", duration: "৩ মাস", price: "৩০০" },
    { title: "মাঝারি প্রকল্প", duration: "৬ মাস", price: "৫০০" },
    { title: "বড় প্রকল্প", duration: "১ বছর", price: "১০০০" },
    // Add more plans as needed
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {plans.map((plan, index) => (
        <PlanCard
          key={index}
          title={plan.title}
          duration={plan.duration}
          price={plan.price}
          isGradient={index % 2 !== 0} // Alternate gradient and white
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 190,
    height: 190,
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    overflow: "hidden",
    // iOS shadow properties:
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.25,
    // shadowRadius: 7,
    // Android elevation property:
    // elevation: 7, // This creates the shadow effect on Android
  },
  whiteCard: {
    backgroundColor: "white",
  },
  priceBadge: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#A6CC39",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // to cut off the part outside the card
  },
  priceText: {
    color: "rgba(20, 31, 116, 1)",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "AnekBangla_600SemiBold",
  },
  title: {
    color: "#EBF3FF",
    fontSize: 22,
    textAlign: "center",
    fontFamily: "AnekBangla_500Medium",
  },
  duration: {
    color: "rgba(235, 243, 255, 0.8)",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default Plans;
