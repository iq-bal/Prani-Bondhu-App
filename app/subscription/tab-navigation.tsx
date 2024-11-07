import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  useFonts,
  AnekBangla_500Medium,
  AnekBangla_200ExtraLight,
} from "@expo-google-fonts/anek-bangla";

const TabNavigation = () => {
  const tabs = ["প্লটিনাম প্রকল্প", "মাছ প্রকল্প", "গরু খামার", "ছাগল খামার"];
  const [activeTab, setActiveTab] = useState("মাছ প্রকল্প"); // Default active tab

  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,

    AnekBangla_200ExtraLight,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setActiveTab(tab)}
          style={styles.tab}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}
          >
            {tab}
          </Text>
          {activeTab === tab && <View style={styles.activeDot} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#141F74",
  },
  tab: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 15,
    color: "#FFFFFF", // Light grey for inactive tabs
    fontFamily: "AnekBangla_200ExtraLight",
  },
  activeTabText: {
    color: "#FFFFFF", // White for active tab
    fontWeight: "bold",
    fontFamily: "AnekBangla_500Medium",
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#FFFFFF", // White dot for active tab
    marginTop: 4,
  },
});

export default TabNavigation;
