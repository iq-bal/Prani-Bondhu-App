import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

interface PackageProps {
  text: string;
}

const Package = ({ text }: PackageProps) => {
  return (
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
        <Text style={styles.buttonText}>{text}</Text>
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
});

export default Package;
