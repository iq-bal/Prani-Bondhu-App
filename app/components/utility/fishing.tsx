import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

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

const data = [
  {
    id: "1",
    status: "চলমান",
    startDate: "৯ই জুলাই, ২০২৪",
    duration: "৩ মাস ৬ দিন",
    amount: "১,৬৫,০০০",
    isActive: true,
  },
  {
    id: "2",
    status: "শেষ",
    startDate: "৯ই জুলাই, ২০২৪",
    duration: "৩ মাস ৬ দিন",
    amount: "১,৬৫,০০০",
    isActive: false,
  },
  {
    id: "3",
    status: "শেষ",
    startDate: "৯ই জুলাই, ২০২৪",
    duration: "৩ মাস ৬ দিন",
    amount: "১,৬৫,০০০",
    isActive: false,
  },
  {
    id: "4",
    status: "শেষ",
    startDate: "৯ই জুলাই, ২০২৪",
    duration: "৩ মাস ৬ দিন",
    amount: "১,৬৫,০০০",
    isActive: false,
  },
  {
    id: "5",
    status: "শেষ",
    startDate: "৯ই জুলাই, ২০২৪",
    duration: "৩ মাস ৬ দিন",
    amount: "১,৬৫,০০০",
    isActive: false,
  },
  {
    id: "6",
    status: "শেষ",
    startDate: "৯ই জুলাই, ২০২৪",
    duration: "৩ মাস ৬ দিন",
    amount: "১,৬৫,০০০",
    isActive: false,
  },
];

interface ListItemProps {
  item: {
    id: string;
    status: string;
    startDate: string;
    duration: string;
    amount: string;
    isActive: boolean;
  };
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/cultivation-details/cultivation-details");
      }}
      style={[styles.listItem, item.isActive ? styles.activeItem : null]}
    >
      <Text style={[styles.column, item.isActive ? { color: "#FFF" } : null]}>
        চাষ নং ৯
      </Text>
      <View
        style={[
          styles.separator,
          item.isActive ? { backgroundColor: "#ffffff" } : null,
        ]}
      />
      <Text style={[styles.column, item.isActive ? { color: "#FFF" } : null]}>
        {item.startDate}
      </Text>
      <View
        style={[
          styles.separator,
          item.isActive ? { backgroundColor: "#ffffff" } : null,
        ]}
      />
      <Text style={[styles.column, item.isActive ? { color: "#FFF" } : null]}>
        {item.duration}
      </Text>
      <View
        style={[
          styles.separator,
          item.isActive ? { backgroundColor: "#ffffff" } : null,
        ]}
      />
      <Text style={[styles.column, item.isActive ? { color: "#FFF" } : null]}>
        {item.amount}
      </Text>
      <View
        style={[
          styles.separator,
          item.isActive ? { backgroundColor: "#ffffff" } : null,
        ]}
      />
      <Text style={[styles.column, item.isActive ? { color: "#FFF" } : null]}>
        {item.status}
      </Text>
    </TouchableOpacity>
  );
};

interface details {
  finished: string;
  running: string;
}

interface FishingProps {
  pondName: string;
  pondDetails: details;
  filterActive?: boolean; // New prop for filtering active items
  onPress?: () => void;
}

const Fishing = ({
  pondName,
  pondDetails,
  filterActive,
  onPress,
}: FishingProps) => {
  // Filter data based on isActive if filterActive is true
  const filteredData = filterActive
    ? data.filter((item) => item.isActive)
    : data;

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
    <View style={styles.fishingContainer}>
      <TouchableOpacity onPress={onPress} style={styles.header}>
        <Text style={styles.headerText}>
          {pondName}{" "}
          <Text style={styles.subHeaderText}>
            (চাষ শেষ হয়েছে {pondDetails.finished} টি, চলমান{" "}
            {pondDetails.running})
          </Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>নং</Text>
        <Text style={styles.columnHeader}>শুরু হয়েছিল</Text>
        <Text style={styles.columnHeader}>সময় সীমা</Text>
        <Text style={styles.columnHeader}>আয়</Text>
        <Text style={styles.columnHeader}>অবস্থা</Text>
      </View>
      <ScrollView>
        {filteredData.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fishingContainer: {
    flex: 1,
    marginBottom: 30,
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    // fontWeight: "bold",
    // color: "#333",
    fontFamily: "AnekBangla_600SemiBold",
  },
  subHeaderText: {
    fontSize: 11,
    color: "#EE57A4",
    fontFamily: "AnekBangla_500Medium",
  },
  tableHeader: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  columnHeader: {
    flex: 1,
    fontSize: 11,
    // color: "#555",
    textAlign: "center",
    fontFamily: "AnekBangla_400Regular",
  },
  listItem: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginVertical: 4,
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 8,
    elevation: 7, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  activeItem: {
    backgroundColor: "rgba(63, 82, 227, 1)",
  },
  column: {
    flex: 1,
    fontSize: 8,
    // color: "#000000",
    textAlign: "center",
    fontFamily: "AnekBangla_400Regular",
  },
  separator: {
    width: 1,
    backgroundColor: "#000000",
    marginHorizontal: 4,
  },
});

export default Fishing;
