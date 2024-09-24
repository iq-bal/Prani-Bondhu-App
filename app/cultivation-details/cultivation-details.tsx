import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ParentContainer from "../components/utility/parent-container";
import Header from "../components/utility/header";
import FinancialSummary from "../components/utility/financial-summary";
import CategoryButtons from "../components/utility/category-button";
import Income from "../components/utility/income";
import PlusIcon from "../components/utility/plus-icon";
import { router } from "expo-router";

const CultivationDetails = () => {
  const handleBackPress = () => {
    router.push("/pond/pond-component");
  };
  return (
    <ParentContainer>
      <Header onIconPress={handleBackPress} alignment="right">
        <View style={styles.container}>
          <Text style={styles.headerText}>চাষ শুরু হয়েছিল</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>৭ই ডিসেম্বর, ২০২৪</Text>
            <Ionicons name="calendar-outline" size={20} color="#4A5AFF" />
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>সকাল ১২:৪৫ টা</Text>
            <Ionicons name="time-outline" size={20} color="#4A5AFF" />
          </View>
        </View>
      </Header>
      <View style={styles.matha}>
        <Text style={styles.mathaText}>ইলিশ দিঘী</Text>
        <Text style={styles.upoMathaText}>চলমান রয়েছে</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* First Button */}
        <TouchableOpacity style={[styles.button, styles.outlinedButton]}>
          <Ionicons name="add-outline" size={20} color="#4A5AFF" />
          <Text style={[styles.buttonText, styles.outlinedButtonText]}>
            নতুন সদস্য যুক্ত
          </Text>
        </TouchableOpacity>

        {/* Second Button */}
        <TouchableOpacity style={[styles.button, styles.outlinedButton]}>
          <Ionicons name="eye-off-outline" size={20} color="#4A5AFF" />
          <Text style={[styles.buttonText, styles.outlinedButtonText]}>
            মৃত যুক্ত করুন
          </Text>
        </TouchableOpacity>

        {/* Third Button */}
        <TouchableOpacity
          style={[{ ...styles.button, marginRight: 0 }, styles.filledButton]}
        >
          <Ionicons name="close-outline" size={20} color="#FFF" />
          <Text style={[styles.buttonText, styles.filledButtonText]}>
            চাষ সমাপ্ত করুন
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>মোট মাছ সংখ্যা</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১৩৫০ টি</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>মোট রুই মাছ</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১৩৫০ টি</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>মোট কাতলা মাছ</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১৩৫০ টি</Text>
          </View>
        </View>
        <View style={[{ ...styles.cardContainer, marginRight: 0 }]}>
          <Text style={styles.cardTitle}>মোট ইলিশ</Text>
          <View style={styles.card}>
            <Text style={styles.cardValue}>১৩৫০ টি</Text>
          </View>
        </View>
      </ScrollView>

      <FinancialSummary />
      <CategoryButtons />
      <Income
        isTouchable={false}
        type="income"
        data={{
          source: "মাটি বিক্রয়",
          name: "আসিফ",
          amount: "১৫,০০০ টাকা",
          date: "৭ই মার্চ ২০২৪",
          paid: "৭,৫০০ টাকা",
          due: "৭,৫০০ টাকা",
          note: "মাটি বিক্রয়ের সময় পাইছি",
        }}
      />
      <Income
        isTouchable={false}
        type="income"
        data={{
          source: "মাটি বিক্রয়",
          name: "আসিফ",
          amount: "১৫,০০০ টাকা",
          date: "৭ই মার্চ ২০২৪",
          paid: "৭,৫০০ টাকা",
          due: "৭,৫০০ টাকা",
          note: "মাটি বিক্রয়ের সময় পাইছি",
        }}
      />
      <PlusIcon position="right" />
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  headerText: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)",
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "100",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 12,
    color: "#000",
    marginRight: 5,
    fontWeight: "bold",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  timeText: {
    fontSize: 12,
    color: "#000",
    marginRight: 15,
    fontWeight: "bold",
  },
  matha: {
    marginBottom: 16,
  },
  mathaText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  upoMathaText: {
    fontSize: 15,
    color: "rgba(86, 103, 229, 1)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10, // Adjusted for smaller padding
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A5AFF",
    flex: 1, // Allows buttons to share space evenly
    marginRight: 5, // Adds spacing between buttons
  },
  outlinedButton: {
    backgroundColor: "transparent",
  },
  outlinedButtonText: {
    color: "#4A5AFF",
    marginLeft: 5,
  },
  filledButton: {
    backgroundColor: "#4A5AFF",
  },
  filledButtonText: {
    color: "#FFF",
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 9, // Adjusted font size for better fit
    fontWeight: "bold",
  },
  scrollContainer: {
    marginVertical: 20,
  },
  cardContainer: {
    marginRight: 10,
  },
  card: {
    width: 150,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 7,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 12,
    color: "#555",
    marginBottom: 5,
    fontWeight: "100",
  },
  cardValue: {
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
  },
});

export default CultivationDetails;
