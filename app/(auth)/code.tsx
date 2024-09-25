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

const { width, height } = Dimensions.get("window");

export default function Code() {
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
          <Text style={styles.title}>কোড পাঠানো হয়েছে</Text>
          <Text style={styles.subtitle}>
            আপনার প্রদত্ত নম্বরে একটি কোড পাঠানো হয়েছে, অনুগ্রহ করে কোড টি এখানে
            দিন
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.codeInputContainer}>
            <TextInput
              style={styles.codeInput}
              maxLength={1}
              keyboardType="number-pad"
              placeholder="-"
              placeholderTextColor="#7C7C7C"
            />
            <TextInput
              style={styles.codeInput}
              maxLength={1}
              keyboardType="number-pad"
              placeholder="-"
              placeholderTextColor="#7C7C7C"
            />
            <TextInput
              style={styles.codeInput}
              maxLength={1}
              keyboardType="number-pad"
              placeholder="-"
              placeholderTextColor="#7C7C7C"
            />
            <TextInput
              style={styles.codeInput}
              maxLength={1}
              keyboardType="number-pad"
              placeholder="-"
              placeholderTextColor="#7C7C7C"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/password");
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
  titleContainer: {
    paddingHorizontal: width * 0.06, // Adjusts paddingHorizontal relative to screen width
    marginBottom: 20,
    marginTop: height * 0.15, // Adjusts marginTop relative to screen height
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
    lineHeight: 24,
    fontFamily: "AnekBangla_500Medium",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: width * 0.06, // Adjusts padding relative to screen width
    paddingBottom: 40,
    paddingTop: 40,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  codeInput: {
    backgroundColor: "#E7E4E4",
    borderRadius: 10,
    padding: 15,
    fontSize: 24,
    color: "#000000",
    textAlign: "center",
    width: width * 0.18, // Adjusts width relative to screen width
  },
  nextButton: {
    backgroundColor: "#141F74",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  nextButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "AnekBangla_500Medium",
  },
});
