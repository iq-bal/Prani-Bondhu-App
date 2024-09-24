import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ParentContainer from "../components/utility/parent-container";
import Header from "../components/utility/header";
import Fishing from "../components/utility/fishing";
import { router } from "expo-router";

const FishingDetails = () => {
  return (
    <ParentContainer>
      <Header
        onIconPress={() => {
          router.push("/");
        }}
        alignment="center"
      >
        <View style={styles.container}>
          <Text style={styles.title}>সকল চাষ</Text>
          <Text style={styles.subtitle}>
            মোট চলমান চাষ ২ টি, শেষ হয়েছে ১৩ টি
          </Text>
        </View>
      </Header>
      <Fishing
        onPress={() => {
          console.log("this page has not been designed yet");
        }}
        pondName="ইলিশ দিঘী"
        pondDetails={{ finished: "১৪", running: "১" }}
      />
      <Fishing
        pondName="পাঙ্গাস দিঘী"
        pondDetails={{ finished: "১৪", running: "১" }}
      />
      <Fishing
        pondName="রুই দিঘী"
        pondDetails={{ finished: "১৪", running: "১" }}
      />
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Center align the content
    marginTop: 20, // Add some margin at the top
  },
  title: {
    fontSize: 25, // Adjust size for emphasis
    fontWeight: "600", // Bold text for the title
    color: "#000000", // Black color
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12, // Slightly smaller font size for the subtitle
    color: "rgba(63, 82, 227, 1)", // Blue color similar to the image
    marginTop: 4, // Slight spacing between title and subtitle
    textAlign: "center",
    fontWeight: "500",
  },
});

export default FishingDetails;
