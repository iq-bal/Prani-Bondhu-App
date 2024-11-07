import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  useFonts,
  AnekBangla_300Light,
  AnekBangla_400Regular,
  AnekBangla_600SemiBold,
  AnekBangla_500Medium,
} from "@expo-google-fonts/anek-bangla";

const screenWidth = Dimensions.get("window").width;

const SubscriptionCard = () => {
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
    <View style={styles.cardWrapper}>
      {/* Date Label */}
      <Text style={styles.dateLabel}>১০ই আগস্ট ২০২৪</Text>

      {/* Card with Main Background Gradient */}
      <View style={styles.cardContainer}>
        {/* Header Section with Updated Gradient */}
        <LinearGradient
          colors={["#90A0FF", "#2544FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerSection}
        >
          <View style={styles.priceTag}>
            <Text style={styles.price}>৩০০</Text>
            <Text style={styles.priceUnit}>টাকা</Text>
          </View>

          {/* Title and Duration */}
          <Text style={styles.title}>স্কূল প্রকল্প</Text>
          <Text style={styles.duration}>৩ মাস</Text>

          {/* Payment Options */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>বিকাশ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>নগদ</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Information Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>সাবস্ক্রিপশন আইডি</Text>
            <Text style={styles.infoText}>#132390</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>শুরু তারিখ</Text>
            <Text style={styles.infoText}>১২ই আগস্ট ২০২৪</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>শেষের তারিখ</Text>
            <Text style={styles.infoText}>১২ই মে ২০২৪</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>পরবর্তী পরিশোধের তারিখ</Text>
            <Text style={styles.infoText}>১২ই মে ২০২৪</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: screenWidth / 2 - 15,
    marginBottom: 10,
  },

  dateLabel: {
    fontSize: 16,
    color: "rgba(20, 31, 116, 1)",
    textAlign: "left",
    marginBottom: 5,
    fontFamily: "AnekBangla_500Medium",
  },

  cardContainer: {
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    backgroundColor: "rgba(20, 31, 116, 1)",
    borderColor: "rgba(86, 103, 229, 1)",
    borderWidth: 1,

    // iOS shadow properties:
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 0 }, // No horizontal or vertical offset
    shadowOpacity: 0.25, // Shadow transparency (opacity)
    shadowRadius: 7, // Blur radius of the shadow
    // Android shadow via elevation:
    elevation: 7, // Elevation creates a shadow on Android
  },

  headerSection: {
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    // iOS shadow properties:
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 0 }, // No horizontal or vertical offset
    shadowOpacity: 0.25, // Shadow transparency (opacity)
    shadowRadius: 7, // Blur radius of the shadow
    // Android shadow via elevation:
    elevation: 7, // Elevation creates a shadow on Android
  },

  priceTag: {
    backgroundColor: "rgba(205, 222, 8, 1)",
    height: 100,
    width: 100,
    borderRadius: 50,
    padding: 10,
    position: "absolute",
    top: -30,
    right: -30,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    color: "rgba(20, 31, 116, 1)",
    fontSize: 15,
    fontFamily: "AnekBangla_600SemiBold",
  },
  priceUnit: {
    color: "rgba(20, 31, 116, 1)",
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },

  title: {
    fontSize: 22,
    color: "rgba(235, 243, 255, 1)",
    marginBottom: 5,
    fontFamily: "AnekBangla_500Medium",
  },

  duration: {
    fontSize: 15,
    color: "rgba(235, 243, 255, 0.8)",
    fontFamily: "AnekBangla_600SemiBold",
    marginBottom: 15,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "rgba(235, 243, 255, 1)",
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 10,
    color: "rgba(20, 31, 116, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },

  infoSection: {
    marginTop: 15,
  },

  infoRow: {
    marginBottom: 5,
  },

  infoLabel: {
    fontFamily: "AnekBangla_600SemiBold",
    color: "rgba(235, 243, 255, 0.4)",
    fontSize: 10,
    marginBottom: 0,
  },

  infoText: {
    color: "rgba(235, 243, 255, 1)",
    fontSize: 10,
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default SubscriptionCard;
