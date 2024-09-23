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
    fontSize: 16,
    color: "#141F74",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 50,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  titleContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 30,
    lineHeight: 24,
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
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
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
    fontSize: 16,
    color: "#000",
  },
  inputIcon: {
    fontSize: 20,
    color: "#141F74",
  },
  hintText: {
    fontSize: 12,
    color: "#152176",
    marginBottom: 10,
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
    fontSize: 14,
    color: "#152176",
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
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  loginLink: {
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#141F74",
  },
});
