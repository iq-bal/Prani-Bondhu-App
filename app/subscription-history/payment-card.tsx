import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  useFonts,
  AnekBangla_300Light,
  AnekBangla_400Regular,
  AnekBangla_600SemiBold,
  AnekBangla_500Medium,
} from "@expo-google-fonts/anek-bangla";

const PaymentCard = () => {
  let [fontsLoaded] = useFonts({
    AnekBangla_300Light,
    AnekBangla_400Regular,
    AnekBangla_600SemiBold,
    AnekBangla_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Header with its own gradient */}
      <LinearGradient
        colors={["#90A0FF", "#2544FF"]}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.header}
      >
        <Text style={styles.planTitle}>ক্ষুদ্র প্রকল্প</Text>
        <Text style={styles.planDuration}>৩ মাস</Text>

        <View style={styles.priceTag}>
          <Text style={styles.price}>৩০০</Text>
          <Text style={styles.priceUnit}>টাকা</Text>
        </View>

        <TouchableOpacity style={styles.button} disabled>
          <Text style={styles.buttonText}>বন্ধ হয়েছে</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Rest of the card content */}
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>সাবস্ক্রিপশন আইডি</Text>
          <Text style={styles.value}>#132390</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>শুরুক তারিখ</Text>
          <Text style={styles.value}>১২ই আগস্ট ২০২৪</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>শেষের তারিখ</Text>
          <Text style={styles.value}>১২ই মে ২০২৪</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>পরবর্তী পরিশোধের তারিখ</Text>
          <Text style={styles.value}>১২ই মে ২০২৪</Text>
        </View>
      </View>

      <Text style={styles.note}>
        পেমেন্ট করার মাধ্যমে আপনার সাবস্ক্রিপশন টি পুনরায় সক্রিয় হবে
      </Text>

      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentButtonText}>৬৩০ টাকা প্রদান করুন</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: "rgba(20, 31, 116, 1)",
    borderColor: "rgba(86, 103, 229, 1)",
    borderWidth: 1,
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 25,
    borderRadius: 10,
    marginBottom: 15,
    position: "relative",
    overflow: "hidden",
  },
  planTitle: {
    color: "rgba(235, 243, 255, 1)",
    fontSize: 22,
    fontFamily: "AnekBangla_500Medium",
  },
  planDuration: {
    color: "rgba(235, 243, 255, 0.8)",
    fontSize: 15,
    fontFamily: "AnekBangla_600SemiBold",
  },
  priceTag: {
    backgroundColor: "rgba(205, 222, 8, 1)",
    height: 80,
    width: 80,
    borderRadius: 40,
    padding: 10,
    position: "absolute",
    top: -20,
    right: -20,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 15,
    color: "rgba(20, 31, 116, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },
  priceUnit: {
    fontSize: 12,
    color: "rgba(20, 31, 116, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 7,
    position: "absolute",
    bottom: 5,
    right: 0,
  },
  buttonText: {
    color: "rgba(20, 31, 116, 1)",
    fontSize: 10,
    fontFamily: "AnekBangla_600SemiBold",
  },

  detailsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap", // Allow wrapping to form a grid
    marginBottom: 15,
  },
  row: {
    width: "50%", // Each item takes up half the width
    paddingVertical: 5,
    alignItems: "center", // Align items to the start of each column
  },
  label: {
    color: "rgba(235, 243, 255, 0.4)",
    fontSize: 10,
    fontFamily: "AnekBangla_600SemiBold",
    marginBottom: 3,
  },
  value: {
    color: "rgba(235, 243, 255, 1)",
    fontSize: 10,
    fontFamily: "AnekBangla_600SemiBold",
  },
  note: {
    color: "rgba(205, 222, 8, 1)",
    fontSize: 10,
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "AnekBangla_400Regular",
  },
  paymentButton: {
    backgroundColor: "rgba(235, 243, 255, 1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  paymentButtonText: {
    color: "rgba(20, 31, 116, 1)",
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default PaymentCard;
