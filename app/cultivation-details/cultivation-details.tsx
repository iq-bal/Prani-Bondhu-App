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
import {
  useFonts,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";
import { useState } from "react";

import CustomCard from "../pond/income";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

const CultivationDetails = () => {
  const [activeTab, setActiveTab] = useState("income"); // Manage active tab

  const handleBackPress = () => {
    router.push("/pond/pond-component");
  };

  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function increment() {}
  function decrement() {}

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 10 }}>
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
            <Text style={styles.mathaText}>১২ তম চাষ</Text>
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
            {/* <TouchableOpacity style={[styles.button, styles.outlinedButton]}>
          <Ionicons name="eye-off-outline" size={20} color="#4A5AFF" />
          <Text style={[styles.buttonText, styles.outlinedButtonText]}>
            মৃত যুক্ত করুন
          </Text>
        </TouchableOpacity> */}

            {/* Third Button */}
            <TouchableOpacity
              style={[
                { ...styles.button, marginRight: 0 },
                styles.filledButton,
              ]}
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
                <View
                  style={[styles.addButton, { backgroundColor: "transparent" }]}
                />
                <Text style={styles.cardValue}>১৩৫০ টি</Text>
                <View
                  style={[styles.addButton, { backgroundColor: "transparent" }]}
                />
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Text style={styles.cardTitle}>মোট রুই মাছ</Text>
              <View style={styles.card}>
                <TouchableOpacity onPress={decrement} style={styles.addButton}>
                  <Text style={styles.addButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cardValue}>১৩৫০ টি</Text>
                <TouchableOpacity onPress={increment} style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <Text style={styles.cardTitle}>মোট কাতলা মাছ</Text>
              <View style={styles.card}>
                <TouchableOpacity onPress={decrement} style={styles.addButton}>
                  <Text style={styles.addButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cardValue}>১৩৫০ টি</Text>
                <TouchableOpacity onPress={increment} style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[{ ...styles.cardContainer, marginRight: 0 }]}>
              <Text style={styles.cardTitle}>মোট ইলিশ</Text>
              <View style={styles.card}>
                <TouchableOpacity onPress={decrement} style={styles.addButton}>
                  <Text style={styles.addButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cardValue}>১৩৫০ টি</Text>
                <TouchableOpacity onPress={increment} style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <FinancialSummary />
        </View>
        {/* <CategoryButtons />
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
      /> */}

        <View
          style={{
            backgroundColor: "rgba(230, 230, 250, 1)",
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
            }}
          >
            <MaterialCommunityIcons
              name="calendar-text"
              size={30}
              color="rgba(20, 31, 116, 1)"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "AnekBangla_500Medium",
                color: "rgba(20, 31, 116, 1)",
              }}
            >
              চাষের আয় ব্যয় সমূহ
            </Text>
          </View>

          {/* New UI Section */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === "income" && styles.activeTab]}
              onPress={() => setActiveTab("income")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "income" && styles.activeTabText,
                ]}
              >
                আয় সমূহ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === "expense" && styles.activeTab]}
              onPress={() => setActiveTab("expense")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "expense" && styles.activeTabText,
                ]}
              >
                ব্যায় সমূহ
              </Text>
            </TouchableOpacity>
          </View>
          {/* Conditional Rendering of Income/Expense */}
          {activeTab === "income" ? (
            // <Income
            //   onPress={() => {
            //     router.push("/pond/pond-income-expense");
            //   }}
            //   isTouchable={true}
            //   type="income"
            //   data={{
            //     source: "মাটি বিক্রয়",
            //     name: "আসিফ",
            //     amount: "১৫,০০০ টাকা",
            //     date: "৭ই মার্চ ২০২৪",
            //     paid: "৭,৫০০ টাকা",
            //     due: "৭,৫০০ টাকা",
            //     note: "মাটি বিক্রয়ের সময় পাইছি",
            //   }}
            // />
            <>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </>
          ) : (
            // <Income
            //   isTouchable={true}
            //   type="expense"
            //   data={{
            //     source: "মাটি উত্তোলন",
            //     total: "১৫,০০০ টাকা",
            //     due: "৭,৫০০ টাকা",
            //     paid: "৭,৫০০ টাকা",
            //     date: "৭ই মার্চ ২০২৪",
            //     supplier: "রসিদ মিয়া",
            //     note: "মাটি তোলার সময় দেয়া হইছে",
            //   }}
            // />
            <>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </>
          )}
        </View>

        <PlusIcon position="right" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  headerText: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 1)",
    textAlign: "center",
    marginBottom: 5,
    // fontWeight: "100",
    fontFamily: "AnekBangla_500Medium",
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
    fontFamily: "AnekBangla_600SemiBold",
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
    fontFamily: "AnekBangla_600SemiBold",
  },
  matha: {
    marginBottom: 16,
  },
  mathaText: {
    fontSize: 25,
    fontFamily: "AnekBangla_600SemiBold",
    color: "#333",
  },
  upoMathaText: {
    fontSize: 14,
    color: "rgba(86, 103, 229, 1)",
    fontFamily: "AnekBangla_500Medium",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20, // Adjusted for smaller padding
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4A5AFF",
    // flex: 1, // Allows buttons to share space evenly
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
    fontSize: 10, // Adjusted font size for better fit
    fontFamily: "AnekBangla_500Medium",
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
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
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
    fontFamily: "AnekBangla_500Medium",
  },
  cardValue: {
    fontSize: 12,
    color: "#000",
    fontFamily: "AnekBangla_600SemiBold",
  },

  addButton: {
    backgroundColor: "rgba(86, 103, 229, 1)",
    borderRadius: 5,
    // padding: 10,
    width: 30,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },

  tabsContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignSelf: "center",
    borderWidth: 1,
    // borderColor: "rgba(86, 103, 229, 1)",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    padding: 3,
  },
  tab: {
    paddingVertical: 10,
    width: "50%",
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "rgba(86, 103, 229, 1)",
  },
  tabText: {
    fontSize: 14,
    color: "background: rgba(86, 103, 229, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },
  activeTabText: {
    color: "rgba(255, 255, 255, 1)",
  },
});

export default CultivationDetails;
