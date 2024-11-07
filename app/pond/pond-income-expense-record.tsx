import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomCard from "./income";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/utility/header";
import { useRouter } from "expo-router";
import RecordHeader from "./record-header";
import RecordCard from "./record-card";
import DateDisplay from "./date-display";

const PondIncomeExpenseRecord = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <Header
          onIconPress={() => {
            router.push("/pond/pond-component");
          }}
          title="১২ তম চাষ"
          alignment="right"
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={{ paddingHorizontal: 10 }}>
          <CustomCard />
        </View>

        <RecordHeader />
        <View style={{ paddingHorizontal: 10 }}>
          <DateDisplay />
          <RecordCard />
          <RecordCard />
        </View>

        <View style={{ paddingHorizontal: 10 }}>
          <DateDisplay />
          <RecordCard />
          <RecordCard />
        </View>
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F5F7FF",
  },
  scrollContainer: {
    // paddingTop: 20,
  },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 16,
    backgroundColor: "#457BEF",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  floatingButtonText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default PondIncomeExpenseRecord;
