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

export default function Password() {
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
          <Text style={styles.title}>নতুন পাসওয়ার্ড সেট করুন</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="নতুন পাসওয়ার্ড দিন"
            placeholderTextColor="#7C7C7C"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="পুনরায় পাসওয়ার্ড দিন"
            placeholderTextColor="#7C7C7C"
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/success");
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
    paddingHorizontal: 12,
    paddingVertical: 5,
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
    textAlign: "center", // Center the title text
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
  input: {
    backgroundColor: "#E7E4E4",
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
    fontFamily: "AnekBangla_500Medium",
  },
  nextButton: {
    backgroundColor: "#141F74",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    width: "80%",
    alignSelf: "center", // Center the button
  },
  nextButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "AnekBangla_500Medium",
  },
});
