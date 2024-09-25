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
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function Recover() {
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>পাসওয়ার্ড পুনরুদ্ধার</Text>
          <Text style={styles.subtitle}>
            আপনি যদি পাসওয়ার্ড ভুলে যান তবে আপনার নির্দিষ্ট মোবাইল নম্বর টি
            দিয়ে সঠিকভাবে একাউন্টটি ফিরিয়ে আনুন।
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="মোবাইল নাম্বার দিন"
            placeholderTextColor="#7C7C7C"
          />
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/code");
            }}
            style={styles.nextButton}
          >
            <Text style={styles.nextButtonText}>পরবর্তী</Text>
          </TouchableOpacity>
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
    top: 20,
    left: 25,
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
  titleContainer: {
    paddingHorizontal: 25,
    marginBottom: 20,
    marginTop: 100, // Added margin to avoid overlap with the header
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    fontFamily: "AnekBangla_500Medium",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 24,
    fontFamily: "AnekBangla_500Medium",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 25,
    paddingBottom: 40,
    paddingTop: 40,
  },
  input: {
    backgroundColor: "#E7E4E4",
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "AnekBangla_500Medium",
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#141F74",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    width: "80%", // Adjust width here (50% of the container's width)
    alignSelf: "center", // Center the button
  },
  nextButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "AnekBangla_500Medium",
  },
});
