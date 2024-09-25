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
import {
  useFonts,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";

const FishingDetails = () => {
  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
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
    // color: "#000000", // Black color
    textAlign: "center",
    fontFamily: "AnekBangla_600SemiBold",
  },
  subtitle: {
    fontSize: 11,
    color: "rgba(63, 82, 227, 1)",
    marginTop: 4,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: "AnekBangla_500Medium",
  },
});

export default FishingDetails;
