import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const containerPadding = 10; // Adjust this as necessary
const numberOfColumns = 4;
const columnWidth = (screenWidth - containerPadding * 2 - 50) / numberOfColumns;

interface IncomeData {
  source: string;
  name: string;
  amount: string;
  date: string;
  paid: string;
  due: string;
  note: string;
}

interface ExpenseData {
  source: string;
  total: string;
  due: string;
  paid: string;
  date: string;
  supplier: string;
  note: string;
}

interface IncomeProps {
  type: "income" | "expense";
  data: IncomeData | ExpenseData;
  isTouchable: boolean;
  onPress?: () => void;
}

function Income({ type, data, isTouchable, onPress }: IncomeProps) {
  const isIncome = type === "income";

  // Explicitly assert that ContainerComponent is a React component type
  const ContainerComponent = (
    isTouchable ? TouchableOpacity : View
  ) as React.ElementType;

  return (
    <View style={styles.cardContainer}>
      <ContainerComponent onPress={onPress} style={styles.cardLeft}>
        {/* First Row with Underline and Vertical Divider */}
        <View style={styles.customCardRow}>
          <View style={styles.customCardColumn}>
            <Text style={styles.cardLabel}>
              {isIncome ? "আয়ের উৎস" : "খরচের নাম"}
            </Text>
            <Text style={styles.cardValue}>{data.source}</Text>
          </View>
          <View style={styles.customCardColumn}>
            <Text style={styles.cardLabel}>
              {isIncome ? "ক্রেতার নাম" : "মোট টাকা"}
            </Text>
            <Text style={styles.cardValue}>
              {isIncome
                ? (data as IncomeData).name
                : (data as ExpenseData).total}
            </Text>
          </View>
          <View style={styles.customCardColumn}>
            <Text style={styles.cardLabel}>
              {isIncome ? "মোট টাকা" : "বকেয়া টাকা"}
            </Text>
            <Text style={styles.cardValue}>
              {isIncome
                ? (data as IncomeData).amount
                : (data as ExpenseData).due}
            </Text>
          </View>
          <View style={[styles.customCardColumn, styles.noBorderRight]}>
            <Text style={styles.cardLabel}>
              {isIncome ? "লেনদেনের তারিখ" : "পরিশোধিত টাকা"}
            </Text>
            <Text style={styles.cardValue}>
              {isIncome
                ? (data as IncomeData).date
                : (data as ExpenseData).paid}
            </Text>
          </View>
        </View>

        {/* Second Row (No underline) */}
        <View style={[styles.customCardRow, styles.noBorderBottom]}>
          <View style={[styles.customCardColumn, styles.noBorderBottom]}>
            <Text style={styles.cardLabel}>
              {isIncome ? "পরিশোধিত টাকা" : "খরচের তারিখ"}
            </Text>
            <Text style={[styles.cardValue]}>
              {isIncome
                ? (data as IncomeData).paid
                : (data as ExpenseData).date}
            </Text>
          </View>
          <View style={[styles.customCardColumn, styles.noBorderBottom]}>
            <Text style={styles.cardLabel}>
              {isIncome ? "দেনা টাকা" : "সাপ্লাইয়ার"}
            </Text>
            <Text
              style={[styles.cardValue, { color: "rgba(86, 103, 229, 1)" }]}
            >
              {isIncome
                ? (data as IncomeData).due
                : (data as ExpenseData).supplier}
            </Text>
          </View>
          <View style={[styles.customCardColumnFull, styles.noBorderBottom]}>
            <Text style={styles.cardLabel}>{isIncome ? "নোট" : "নোট"}</Text>
            <View>
              <Text style={styles.cardNote}>
                {isIncome
                  ? (data as IncomeData).note
                  : (data as ExpenseData).note}
              </Text>
              {isTouchable && (
                <Ionicons
                  name="arrow-forward-circle"
                  size={28}
                  color="#5667E5"
                  style={styles.cardArrow}
                />
              )}
            </View>
          </View>
        </View>
      </ContainerComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 245, 1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    paddingHorizontal: containerPadding,
  },

  cardLeft: {
    flex: 1,
  },

  customCardRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EE57A4",
    paddingVertical: 10,
  },

  customCardColumn: {
    width: columnWidth, // Divides the screen width into four equal parts
    borderRightWidth: 1,
    borderRightColor: "#EE57A4",
    paddingHorizontal: 5,
  },
  customCardColumnFull: {
    width: columnWidth * 2, // This column spans two regular columns
    paddingHorizontal: 5,
    flexWrap: "wrap",
  },

  cardLabel: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.25)",
    textAlign: "center", // Center align the text within the column
    flexWrap: "wrap", // Ensure text wraps within the cell
  },

  cardValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 1)",
    textAlign: "center", // Center align the text within the column
    flexWrap: "wrap", // Ensure text wraps within the cell
  },

  cardNote: {
    fontSize: 12,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 1)",
    textAlign: "center", // Center align the text within the column
    flexWrap: "wrap", // Ensure text wraps within the cell
  },

  noBorderRight: {
    borderRightWidth: 0,
  },

  noBorderBottom: {
    borderBottomWidth: 0,
  },
  cardArrow: {
    marginLeft: "80%",
  },
});

export default Income;
