import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

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

const RecordCard = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.timeText}>বিকাল ৬ টা ১৭ মিনিট</Text>
        <TouchableOpacity style={styles.editButton}>
          <FontAwesome name="edit" size={16} color="rgba(20, 31, 116, 1)" />
          <Text style={styles.editButtonText}>তথ্য পরিবর্তন করুন</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={["#2AA7FF", "#5667E5"]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 0.01 }}
        style={styles.cardContainer}
      >
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>মাধ্যম</Text>
              <Text style={styles.infoLabel}>পরিমাণ</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoValue}>বিকাশ</Text>
              <Text style={styles.infoValue}>৮,০০০</Text>
            </View>
          </View>
        </View>

        <Text style={styles.noteLabel}>নোট</Text>

        <View style={styles.noteBox}>
          <Text style={styles.noteText}>
            রবিবার সকাল ১০ টায় রুহুল ভাইয়ের সাথে যোগাযোগ করে সামিউল ভাইকে টাকা
            দিয়েছি
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  timeText: {
    color: "rgba(86, 103, 229, 1)", // Dark blue
    fontSize: 12,
    fontFamily: "AnekBangla_500Medium",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(205, 222, 8, 1)",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  editButtonText: {
    marginLeft: 8,
    fontSize: 10,
    color: "rgba(20, 31, 116, 1)",
    fontFamily: "AnekBangla_500Medium",
  },
  cardContainer: {
    borderRadius: 12,
    padding: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    flex: 0.5,
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoLabel: {
    color: "rgba(248, 244, 23, 1)",
    fontSize: 12,
    fontFamily: "AnekBangla_500Medium",
  },
  infoValue: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "AnekBangla_500Medium",
  },
  noteLabel: {
    color: "rgba(248, 244, 23, 1)",
    fontSize: 10,
    fontFamily: "AnekBangla_500Medium",
    marginBottom: 4,
    marginTop: 4,
  },
  noteBox: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
  },
  noteText: {
    fontFamily: "AnekBangla_500Medium",
    color: "rgba(20, 31, 116, 1)",
    fontSize: 10,
  },
});

export default RecordCard;
