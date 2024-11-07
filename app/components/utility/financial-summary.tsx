import {
  useFonts,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FinancialSummary = () => {
  let [isLoaded] = useFonts({
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* First Row: মোট আয়, মোট ব্যয়, মোট পাওনা */}
      <View style={styles.row}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>মোট আয়</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১,৫৮,৫৪৭০ টাকা</Text>
          </View>
        </View>
        <View style={[{ ...styles.cardContainer, marginRight: 0 }]}>
          <Text style={styles.cardTitle}>মোট ব্যয়</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১,৫৮,৫৪৭০ টাকা</Text>
          </View>
        </View>
        {/* <View style={[{ ...styles.cardContainer, marginRight: 0 }]}>
          <Text style={styles.cardTitle}>মোট পাওনা</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১,৫৮,৫৪৭০ টাকা</Text>
          </View>
        </View> */}
      </View>

      <View style={styles.row}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>মোট পাওনা</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১,৫৮,৫৪৭০ টাকা</Text>
          </View>
        </View>
        <View style={[{ ...styles.cardContainer, marginRight: 0 }]}>
          <Text style={styles.cardTitle}>মোট দেনা</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১,৫৮,৫৪৭০ টাকা</Text>
          </View>
        </View>
        {/* <View style={[{ ...styles.cardContainer, marginRight: 0 }]}>
          <Text style={styles.cardTitle}>মোট পাওনা</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১,৫৮,৫৪৭০ টাকা</Text>
          </View>
        </View> */}
      </View>

      {/* Second Row: মোট দেনাদার, মোট লাভ / ক্ষতি */}
      <View style={styles.row}>
        {/* <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>মোট দেনাদার</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১,৫৮,৫৪৭০ টাকা</Text>
          </View>
        </View> */}
        <View
          style={[
            { ...styles.cardContainer, marginRight: 0 },
            styles.fullWidthCardContainer,
          ]}
        >
          {/* <Text style={styles.cardTitle}>মোট লাভ / ক্ষতি</Text> */}
          <View style={{ marginBottom: 5 }}></View>
          <View style={[styles.card, styles.highlightedCard]}>
            <Text style={styles.highlightedCardValue}>
              মোট লাভ ১৩,৯৫,০০০ টাকা
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    // gap: 10,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 12,
    color: "#555",
    marginBottom: 5,
    // fontWeight: "100",
    fontFamily: "AnekBangla_500Medium",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 7,
  },
  cardValue: {
    fontSize: 12,
    color: "#000",
    // fontWeight: "bold",
    fontFamily: "AnekBangla_600SemiBold",
  },
  fullWidthCardContainer: {
    flex: 2, // Span across two columns
  },
  highlightedCard: {
    backgroundColor: "#4A5AFF",
  },
  highlightedCardValue: {
    fontSize: 12,
    color: "#FFF",
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default FinancialSummary;
