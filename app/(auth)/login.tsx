import {
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
  useFonts,
} from "@expo-google-fonts/anek-bangla";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  let [isLoaded] = useFonts({
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
  });

  if (!isLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>📞 কাস্টমার কেয়ার</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>লগিন করুন</Text>
            <Text style={styles.subtitle}>
              আপনি যদি পূর্বনায় একাউন্ড নিবন্ধন করে থাকেন তাহলে এখানে আপনার
              তথ্য দিয়ে একাউন্টে প্রবেশ করতে পারবেন
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="মোবাইল নাম্বার দিন"
              placeholderTextColor="#000000"
            />
            <TextInput
              style={styles.input}
              placeholder="পাসওয়ার্ড লিখুন"
              placeholderTextColor="#000000"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/recover");
            }}
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>
              পাসওয়ার্ড ভুল গিয়েছে?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/(tabs)/home");
            }}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>লগিন করুন</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/register");
            }}
            style={styles.registerLink}
          >
            <Text style={styles.registerText}>
              একাউন্ট নেই? রেজিস্ট্রেশন করুন
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#4D6CFF",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#4D6CFF",
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: 10,
    color: "#141F74",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 50,
    alignSelf: "flex-start",
    marginBottom: 50, // Added margin to create a gap
    fontFamily: "AnekBangla_600SemiBold",
  },
  titleContainer: {
    marginTop: 30, // Added margin to create a gap
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    marginBottom: 10,
    fontFamily: "AnekBangla_500Medium",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 40,
    lineHeight: 24,
    fontFamily: "AnekBangla_500Medium",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#E7E4E4",
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: 15,
    fontFamily: "AnekBangla_500Medium",
  },
  forgotPassword: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: "#152176",
    fontFamily: "AnekBangla_500Medium",
  },
  loginButton: {
    backgroundColor: "#141F74",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    width: "80%", // Adjust the width to make the button smaller
    alignSelf: "center", // Center the button
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "AnekBangla_500Medium",
  },
  registerLink: {
    alignItems: "center",
  },
  registerText: {
    fontSize: 20,
    color: "#141F74",
    fontFamily: "AnekBangla_500Medium",
  },
});
