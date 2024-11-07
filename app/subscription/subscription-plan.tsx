import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Features from "./features";
import Plans from "./plans";
import PaymentSection from "./payment-section";
import TabNavigation from "./tab-navigation";
import Header from "./header";

import {
  useFonts,
  AnekBangla_300Light,
  AnekBangla_400Regular,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";

const SubscriptionScreen = () => {
  const tabs = ["প্লটিনাম প্রকল্প", "মাছ প্রকল্প", "গরু খামার", "ছাগল খামার"];
  const [activeTab, setActiveTab] = useState("মাছ প্রকল্প"); // Default active tab

  let [fontsLoaded] = useFonts({
    AnekBangla_300Light,
    AnekBangla_400Regular,
    AnekBangla_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <TabNavigation />
      <View style={{ margin: 10 }} />
      <Plans />
      <Features />
      <PaymentSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    backgroundColor: "#F4F6F9",
    paddingTop: 20,
  },
});

export default SubscriptionScreen;
