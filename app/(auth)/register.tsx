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

export default function Register() {
  let [isLoaded] = useFonts({
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>📞 কাস্টমার কেয়ার</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>রেজিস্ট্রেশন করুন</Text>
            <Text style={styles.subtitle}>
              নিচের ফর্ম পূরণ করে আপনার একাউন্ট তৈরি করুন। ভুল তথ্য দিবেন না।
            </Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="আপনার নাম (সম্পূর্ণ)"
            placeholderTextColor="#000000"
          />
          <View style={styles.inputIconContainer}>
            <TextInput
              style={styles.inputWithIcon}
              placeholder="জন্ম তারিখ"
              placeholderTextColor="#000000"
            />
            <Text style={styles.inputIcon}>📅</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="মোবাইল নাম্বার"
            placeholderTextColor="#000000"
          />
          <TextInput
            style={styles.input}
            placeholder="ঠিকানা"
            placeholderTextColor="#000000"
          />
          <TextInput
            style={styles.input}
            placeholder="আপনার ফার্মের নাম লিখুন"
            placeholderTextColor="#000000"
          />
          <TextInput
            style={styles.input}
            placeholder="নতুন পাসওয়ার্ড দিন"
            placeholderTextColor="#000000"
            secureTextEntry
          />
          <Text style={styles.hintText}>অক্ষরই পূরণ করতে হবে</Text>
          <TextInput
            style={styles.input}
            placeholder="পুনরায় পাসওয়ার্ড দিন"
            placeholderTextColor="#000000"
            secureTextEntry
          />
          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox} />
            <Text style={styles.checkboxText}>
              আমি শর্তাবলী পড়েছি এবং একমত পোষণ করছি
            </Text>
          </View>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>রেজিস্ট্রেশন</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/login");
            }}
            style={styles.loginLink}
          >
            <Text style={styles.loginText}>একাউন্ট আছে? লগিন করুন</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#4D6CFF", // Ensure SafeAreaView has the correct background color
  },
  container: {
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
    marginBottom: 20,
    fontFamily: "AnekBangla_600SemiBold",
  },
  titleContainer: {
    marginTop: 20,
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
    marginBottom: 30,
    lineHeight: 24,
    fontFamily: "AnekBangla_500Medium",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 30,
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
  inputIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E7E4E4",
    borderRadius: 10,
    marginBottom: 15,
    paddingRight: 15,
  },
  inputWithIcon: {
    flex: 1,
    padding: 15,
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "AnekBangla_500Medium",
  },
  inputIcon: {
    fontSize: 20,
    color: "#141F74",
  },
  hintText: {
    fontSize: 11,
    color: "#152176",
    marginBottom: 10,
    fontFamily: "AnekBangla_500Medium",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#152176",
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 13,
    color: "#152176",
    fontFamily: "AnekBangla_600SemiBold",
  },
  registerButton: {
    backgroundColor: "#141F74",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
    width: "80%", // Adjust the width to make the button smaller
    alignSelf: "center", // Center the button
  },
  registerButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "AnekBangla_500Medium",
  },
  loginLink: {
    alignItems: "center",
  },
  loginText: {
    fontSize: 20,
    color: "#141F74",
    fontFamily: "AnekBangla_500Medium",
  },
});
