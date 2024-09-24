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
        <View style={[styles.packageCard, { backgroundColor: "#F2E307" }]}>
          <Text style={styles.packageTitle}>ক্ষুদ্র খামারী</Text>
          {/* Circle with price */}
          <View style={styles.priceCircle}>
            <Text style={styles.priceText}>মাসিক ২৯৯৳</Text>
          </View>
          <View style={styles.packageFeatures}>
            <FeatureItem text="২ - ৩ টি দিঘীর হিসাব রাখুন" />
            <FeatureItem text="প্রতিটি দিঘীতে একাধিক চাষ করুন" />
            <FeatureItem text="দিঘির হিসাব, মাছের হিসাব, মোট আয়/ব্যয়/লাভ/ক্ষতির হিসাব পান সহজেই" />
          </View>
          <TouchableOpacity style={styles.packageButton}>
            <Text style={styles.buttonText}>এখনি কিনুন</Text>
          </TouchableOpacity>
          {/* Fish Icons inside the card */}
          <View style={styles.fishContainer}>
            <Ionicons
              name="fish"
              size={35} // Increased size
              color="#FCF269"
              style={[styles.fishIcon, styles.fishIcon1]}
            />
            <Ionicons
              name="fish"
              size={35} // Increased size
              color="#FCF269"
              style={[styles.fishIcon, styles.fishIcon2]}
            />
            <Ionicons
              name="fish"
              size={35} // Increased size
              color="#FCF269"
              style={[styles.fishIcon, styles.fishIcon3]}
            />
          </View>
        </View>

        {/* Additional Package Card as needed */}
        <View style={[styles.packageCard, { backgroundColor: "#F2E307" }]}>
          <Text style={styles.packageTitle}>মাঝারী খামারী</Text>
          {/* Circle with price */}
          <View style={styles.priceCircle}>
            <Text style={styles.priceText}>মাসিক ৪৯৯৳</Text>
          </View>
          <View style={styles.packageFeatures}>
            <FeatureItem text="৬ টি দিঘীর হিসাব রাখুন" />
            <FeatureItem text="প্রতিটি দিঘীতে একাধিক চাষ করুন" />
            <FeatureItem text="দিঘির হিসাব, মাছের হিসাব, মোট আয়/ব্যয়/লাভ/ক্ষতির হিসাব পান সহজেই" />
          </View>
          <TouchableOpacity style={styles.packageButton}>
            <Text style={styles.buttonText}>এখনি কিনুন</Text>
          </TouchableOpacity>
          <View style={styles.fishContainer}>
            <Ionicons
              name="fish"
              size={35} // Slightly smaller size
              color="#FCF269"
              style={[styles.fishIcon, styles.fishIcon1]}
            />
            <Ionicons
              name="fish"
              size={35} // Slightly smaller size
              color="#FCF269"
              style={[styles.fishIcon, styles.fishIcon2]}
            />
            <Ionicons
              name="fish"
              size={35} // Slightly smaller size
              color="#FCF269"
              style={[styles.fishIcon, styles.fishIcon3]}
            />
          </View>
        </View>
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

        {/* Regular Pond Card */}
        <TouchableOpacity
          onPress={() => {
            router.push("/pond/pond-component");
          }}
          style={styles.pondCard}
        >
          <View style={styles.pondCircle} />
          <Text style={styles.pondTitle}>দিঘী ১</Text>
          <View style={styles.pondDetailsContainer}>
            <Text style={styles.pondDetails}>৪ মাস, ৯ দিন চলমান</Text>
            <Text style={styles.pondDate}>২৩ সেপ্টেম্বর, ২০২৪ খোলা হয়েছে</Text>
          </View>
          <View style={styles.triangleFishContainer2}>
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

        {/* Another Regular Pond Card */}
        <View style={styles.pondCard}>
          <View style={styles.pondCircle} />
          <Text style={styles.pondTitle}>দিঘী ১</Text>
          <View style={styles.pondDetailsContainer}>
            <Text style={styles.pondDetails}>৪ মাস, ৯ দিন চলমান</Text>
            <Text style={styles.pondDate}>২৩ সেপ্টেম্বর, ২০২৪ খোলা হয়েছে</Text>
          </View>
          <View style={styles.triangleFishContainer2}>
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
        </View>
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
    fontWeight: "bold",
    color: "#000",
    textAlign: "right",
  },
  subText: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "right",
    marginBottom: 20,
  },

  searchContainer: {
    position: "relative",
    marginBottom: 20,
  },
  searchInput: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    fontSize: 16,
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
    // borderStyle: "dashed",
    // borderColor: "#6565FF",
    // borderWidth: 2,
    position: "relative",
  },

  addPondText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5667E5",
    marginTop: 10,
    marginBottom: 20,
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
