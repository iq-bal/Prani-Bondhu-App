import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
  useFonts,
} from "@expo-google-fonts/anek-bangla";

const { width, height } = Dimensions.get("window");

export default function Success() {
  let [isLoaded] = useFonts({
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
  });

  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>📞 কাস্টমার কেয়ার</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="checkmark-circle-outline"
              size={100}
              color="white"
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>নতুন পাসওয়ার্ড সেট হয়েছে</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/login");
              }}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>লগিন করুন</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D6CFF",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  header: {
    position: "absolute",
    top: height * 0.02, // Adjusts top relative to screen height
    left: width * 0.05, // Adjusts left relative to screen width
    zIndex: 1,
  },
  headerText: {
    fontSize: 10,
    color: "#141F74",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 50,
    fontFamily: "AnekBangla_600SemiBold",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.2, // Adjusts marginTop relative to screen height
  },
  titleContainer: {
    paddingHorizontal: width * 0.06, // Adjusts paddingHorizontal relative to screen width
    marginBottom: 20,
    marginTop: 20, // Adjusts marginTop relative to icon
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "AnekBangla_500Medium",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: height * 0.15, // Adds some space at the bottom
  },
  loginButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 20,
    color: "#152176",
    fontFamily: "AnekBangla_500Medium",
  },
});
