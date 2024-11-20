import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  useFonts,
  AnekBangla_400Regular,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";

const UserProfile = () => {
  let [fontsLoaded] = useFonts({
    AnekBangla_400Regular,
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LinearGradient
          colors={[
            "rgba(86, 103, 229, 1)",
            "rgba(20, 31, 116, 1)",
            "rgba(21, 33, 118, 1)",
          ]}
          style={styles.headerContainer}
        >
          <Text style={styles.name}>মোঃ জমির উদ্দিন</Text>
          <Text style={styles.joinDate}>যুক্ত হয়েছেন ১৩ই মার্চ ২০১৪ সাল</Text>
          <Image
            source={{
              uri: "https://via.placeholder.com/100", // Replace with actual image URL
            }}
            style={styles.profileImage}
          />
        </LinearGradient>

        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={16} color="#fff" />
          <Text style={styles.editText}>তথ্য পরিবর্তন করুন</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Ionicons name="person" size={20} color="#13257A" />
            <Text style={styles.infoText}>মোঃ জমির উদ্দিন</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color="#13257A" />
            <Text style={styles.infoText}>
              জোয়ালগাছ বাজার, মিরসরাই, চট্টগ্রাম
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Ionicons name="call" size={20} color="#13257A" />
            <Text style={styles.infoText}>০১৯৯০৮৪৮৫৮৯</Text>
            <TouchableOpacity style={styles.rightIconContainer}>
              <Ionicons name="create-outline" size={25} color="#13257A" />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Ionicons name="key" size={20} color="#13257A" />
            <Text style={styles.infoText}>*****************awf</Text>
          </View>
          <View style={styles.separator} />
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push("/(auth)/login");
          }}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutText}>লগ আউট</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  headerContainer: {
    height: 300,
    width: "100%",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
    position: "relative",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "AnekBangla_600SemiBold",
  },
  joinDate: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    fontFamily: "AnekBangla_400Regular",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    bottom: -50,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#13257A",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 70,
  },
  editText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12,
    fontFamily: "AnekBangla_500Medium",
  },
  infoContainer: {
    width: "90%",
    marginTop: 40,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#000",
    flex: 1,
    fontFamily: "AnekBangla_400Regular",
  },
  rightIconContainer: {
    marginLeft: "auto", // Pushes the icon to the right
  },
  separator: {
    height: 1,
    backgroundColor: "#000000",
    width: "100%",
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: "#13257A",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 40,
    width: 260,
  },
  logoutText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "AnekBangla_500Medium",
  },
});

export default UserProfile;
