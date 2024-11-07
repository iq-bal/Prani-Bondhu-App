import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "./header";
import PaymentCard from "./payment-card";
import HorizontalLine from "./horizontal-line";
import SubscriptionCard from "./subscription-card";

const SubscriptionHistory = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        title="সাবস্ক্রিপশন হিস্টোরি"
        onBackPress={() => console.log("Back pressed")}
      />
      <PaymentCard />
      <HorizontalLine />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});

export default SubscriptionHistory;
