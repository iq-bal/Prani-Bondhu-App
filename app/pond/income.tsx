import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AnekBangla_500Medium, useFonts } from "@expo-google-fonts/anek-bangla";
import { useRouter } from "expo-router";

const CustomCard = () => {
  const router = useRouter();
  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,
  });

  // If fonts are not loaded, return null or a loading indicator
  if (!fontsLoaded) {
    return null; // You can replace this with a loading spinner or message
  }

  return (
    <LinearGradient
      colors={["#2AA7FF", "#5667E5"]}
      start={{ x: 0.0077, y: 0 }}
      end={{ x: 0.9923, y: 1 }}
      style={styles.cardContainer}
    >
      {/* First Row with 4 fields */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>ব্যয়ের উৎস</Text>
          <Text style={styles.value}>মাটি বিক্রয়</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>ক্রেতার নাম</Text>
          <Text style={styles.value}>আসিফ</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>মোট টাকা</Text>
          <Text style={styles.value}>১৫,০০০ টাকা</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>সর্বশেষ লেনদেন</Text>
          <Text style={styles.value}>২৮ মার্চ ২০২৪</Text>
        </View>
      </View>

      {/* Second Row with 2 fields */}
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>পরিশোধিত টাকা</Text>
          <Text style={styles.value}>৭,৫০০ টাকা</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>বাকি টাকা</Text>
          <Text style={styles.value}>৭,৫০০ টাকা</Text>
        </View>
        <View style={styles.emptyColumn}></View>
        <View style={styles.emptyColumn}></View>
      </View>

      {/* Third Row with Note */}
      <View style={styles.noteRow}>
        <Text style={styles.label}>নোট</Text>
        <Text style={styles.value}>মাটি বিক্রয়ের সময়.........</Text>
      </View>

      {/* Button Positioned at Bottom Right */}
      <View style={styles.detailsButtonWrapper}></View>

      <TouchableOpacity
        onPress={() => {
          router.push("/pond/pond-income-expense-record");
        }}
        style={styles.detailsButton}
      >
        <Text style={styles.detailsText}>বিস্তারিত</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.25)", // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Horizontal and vertical shadow offset
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 10, // Shadow blur radius
    elevation: 5, // Android-only: Elevation for similar shadow effect
    position: "relative",
    overflow: "hidden", // Ensure nothing displays outside of the card
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  column: {
    flex: 1,
    justifyContent: "flex-start",
  },
  emptyColumn: {
    flex: 1,
  },
  label: {
    fontSize: 10,
    color: "#FFEB3B",
    marginBottom: 2,
    fontFamily: "AnekBangla_500Medium",
  },
  value: {
    fontSize: 12,
    color: "#FFF",
    fontFamily: "AnekBangla_500Medium",
  },
  noteRow: {
    marginTop: 8,
  },
  detailsButtonWrapper: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    right: -100,
    height: 60,
    width: 200,
    transform: [{ rotate: "-10deg" }],
    overflow: "hidden",
    borderTopLeftRadius: 50,
  },
  detailsButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  detailsText: {
    color: "#4a90e2",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CustomCard;
