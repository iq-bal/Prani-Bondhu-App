import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/utility/header";
import ParentContainer from "../components/utility/parent-container";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import FormField from "../components/utility/form-field";
import Package from "../components/utility/package";
import PondCard from "../components/utility/pond-card";
import {
  useFonts,
  AnekBangla_100Thin,
  AnekBangla_200ExtraLight,
  AnekBangla_300Light,
  AnekBangla_400Regular,
  AnekBangla_500Medium,
  AnekBangla_600SemiBold,
  AnekBangla_700Bold,
  AnekBangla_800ExtraBold,
} from "@expo-google-fonts/anek-bangla";

const screenWidth = Dimensions.get("window").width;

const PremiumPackageScreen = () => {
  const [isFormVisible, setFormVisible] = useState(false); // Manage form visibility

  const router = useRouter();
  const handleBackPress = () => {
    router.push("/(tabs)/projectGroup");
  };

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted");
    setFormVisible(false);
  };

  const [pondName, setPondName] = useState("");
  const [pondArea, setPondArea] = useState("");
  const [pondLocation, setPondLocation] = useState("");
  const [pondExpense, setPondExpense] = useState("");

  const fields = [
    {
      label: "দিঘির নাম",
      placeholder: "",
      value: pondName,
      onChange: setPondName,
      required: true,
    },
    {
      label: "দিঘির আকার",
      placeholder: "মোট আয়তন কত একর",
      value: pondArea,
      onChange: setPondArea,
      required: false,
    },
    {
      label: "ঠিকানা",
      placeholder: "মোট এলাকায় অবস্থিত",
      value: pondLocation,
      onChange: setPondLocation,
      required: false,
    },
    {
      label: "এককালীন খরচ",
      placeholder: "",
      value: pondExpense,
      onChange: setPondExpense,
      required: false,
    },
  ];

  let [fontsLoaded] = useFonts({
    AnekBangla_100Thin,
    AnekBangla_200ExtraLight,
    AnekBangla_300Light,
    AnekBangla_400Regular,
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
    AnekBangla_700Bold,
    AnekBangla_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ParentContainer>
      <Header
        onIconPress={handleBackPress}
        alignment="right"
        title="প্রিমিয়াম প্যাকেজ"
      />
      {/* Horizontally Scrollable Package Cards */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.packageScroll}
      >
        <Package text="এখনি কিনুন" reducingFactor={80} />
        <Package text="এখনি কিনুন" reducingFactor={80} />
        <Package text="এখনি কিনুন" reducingFactor={80} />
      </ScrollView>

      {/* Total Pond Section */}
      <Text style={styles.totalPondText}>মোট দিঘী সমূহ</Text>
      <Text style={styles.subText}>(মোট ৩ টি দিঘী চলমান রয়েছে)</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="নাম, সাল দিয়ে খুঁজুন"
          placeholderTextColor="#8E8E93"
        />
        <Ionicons
          name="search-outline"
          size={24}
          color="#5667E5"
          style={styles.searchIcon}
        />
      </View>

      {/* Pond Cards */}

      <View style={styles.pondContainer}>
        {/* Add Pond Card */}
        <TouchableOpacity onPress={handleOpenForm} style={styles.addPondCard}>
          <Ionicons name="add-circle-outline" size={40} color="#5667E5" />
          <Text style={styles.addPondText}>দিঘী যুক্ত করুন</Text>
          <View style={styles.triangleFishContainer}>
            <Ionicons
              name="fish"
              size={24}
              color="#7EA1FF"
              style={[styles.triangleFishIcon, styles.triangleFishIcon1]}
            />
            <Ionicons
              name="fish"
              size={24}
              color="#7EA1FF"
              style={[styles.triangleFishIcon, styles.triangleFishIcon2]}
            />
            <Ionicons
              name="fish"
              size={24}
              color="#7EA1FF"
              style={[styles.triangleFishIcon, styles.triangleFishIcon3]}
            />
          </View>
        </TouchableOpacity>
        <PondCard />
        <PondCard />
        <PondCard />
        <PondCard />
      </View>
      <Modal visible={isFormVisible} transparent={true} animationType="fade">
        <BlurView intensity={100} tint="light" style={styles.overlay}>
          <FormField
            fields={fields}
            onCancel={handleCloseForm}
            onSubmit={handleFormSubmit}
            onBack={handleCloseForm}
            onCustomerCare={() => console.log("Customer Care Pressed")}
          />
        </BlurView>
      </Modal>
    </ParentContainer>
  );
};

interface FeatureItemProps {
  text: string;
}

// Component to render feature items with icon and text
const FeatureItem = ({ text }: FeatureItemProps) => (
  <View style={styles.featureItem}>
    <Ionicons name="bookmark-outline" size={20} color="#141F74" />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  packageScroll: {
    paddingBottom: 20,
  },

  packageCard: {
    width: 350, // Increased width
    borderRadius: 10,
    padding: 15,
    marginRight: 20,
    position: "relative",
    overflow: "hidden", // Added to hide overflow
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#141F74",
  },
  priceCircle: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FCF269",
    justifyContent: "center",
    alignItems: "center",
    margin: -15,
  },
  priceText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  packageFeatures: {
    marginBottom: 10,
    marginTop: 10, // Added space to avoid overlapping with the price circle
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start", // Align items to the start of the container
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10, // Increased margin for better spacing
    fontSize: screenWidth < 350 ? 14 : 16, // Responsive font size
    color: "#141F74",
    flexShrink: 1, // Allow text to wrap if it's too long
    flex: 1, // Take up remaining space
  },
  packageButton: {
    backgroundColor: "#141F74",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  fishContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -50 }], // Adjust to vertically center
    flexDirection: "column", // Align items in a column
    justifyContent: "center",
    alignItems: "center",
  },
  fishIcon: {
    marginVertical: 3, // Adjust spacing between icons vertically
  },
  fishIcon1: {
    transform: [{ rotate: "10deg" }], // Rotate slightly
  },
  fishIcon2: {
    transform: [{ rotate: "-10deg" }], // Rotate in the opposite direction
  },
  fishIcon3: {
    transform: [{ rotate: "20deg" }], // Rotate more
  },

  totalPondText: {
    fontSize: 25,
    textAlign: "right",
    fontFamily: "AnekBangla_600SemiBold",
  },
  subText: {
    fontSize: 14,
    textAlign: "right",
    marginBottom: 20,
    fontFamily: "AnekBangla_500Medium",
  },

  searchContainer: {
    position: "relative",
    marginBottom: 20,
  },
  searchInput: {
    height: 50,
    borderRadius: 20,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    fontSize: 12,
    fontFamily: "AnekBangla_500Medium",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#5667E5",
  },

  searchIcon: {
    position: "absolute",
    right: 20,
    top: 15,
  },

  pondContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  addPondCard: {
    width: "48%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#EBF3FF",
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  addPondText: {
    fontSize: 15,
    color: "#5667E5",
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "AnekBangla_600SemiBold",
  },

  addFishContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    flexDirection: "row",
  },

  addFishIcon: {
    marginHorizontal: 3, // Adjust spacing between icons horizontally
  },

  pondCard: {
    width: "48%",
    height: 180,
    borderRadius: 10,
    backgroundColor: "#3F52E3",
    padding: 15,
    marginBottom: 20,
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  },

  pondCircle: {
    position: "absolute",
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#5667E5",
  },

  pondDetailsContainer: {
    marginTop: "auto", // Pushes the details container to the bottom
  },

  pondTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },

  pondDetails: {
    fontSize: 12,
    color: "#FFF",
    marginTop: 5,
  },

  pondDate: {
    fontSize: 12,
    color: "#FFF",
    marginTop: 5,
  },

  triangleFishContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 40, // Container size for the triangle arrangement
    height: 40,
  },
  triangleFishContainer2: {
    position: "absolute",
    top: 60,
    right: 10,
    width: 40,
    height: 40,
  },
  triangleFishIcon: {
    position: "absolute",
    transform: [{ rotate: "45deg" }], // Adjust rotation for all icons to face the same direction
  },
  triangleFishIcon1: {
    bottom: -5,
    left: 0,
  },
  triangleFishIcon2: {
    bottom: -10,
    right: -6,
  },
  triangleFishIcon3: {
    top: 0,
    left: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PremiumPackageScreen;
