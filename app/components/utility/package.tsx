import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BookMark from "../vector/bookmark-svg";

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

import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import FishSvg from "../vector/fish-svg";

const screenWidth = Dimensions.get("window").width;

interface PackageProps {
  text: string;
}

const Package = ({ text }: PackageProps) => {
  let [fontsLoadedAnek] = useFonts({
    AnekBangla_100Thin,
    AnekBangla_200ExtraLight,
    AnekBangla_300Light,
    AnekBangla_400Regular,
    AnekBangla_500Medium,
    AnekBangla_600SemiBold,
    AnekBangla_700Bold,
    AnekBangla_800ExtraBold,
  });

  let [fontsLoadedInter] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoadedAnek || !fontsLoadedInter) {
    return null;
  }

  return (
    <View style={[styles.packageCard, { backgroundColor: "#F2E307" }]}>
      <Text style={styles.packageTitle}>ক্ষুদ্র খামারী</Text>
      {/* Circle with price */}
      <View style={styles.priceCircle}>
        <Text style={styles.priceText}>
          মাসিক {"\n"} ২৯৯ {"\n"} ৳
        </Text>
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
        <FishSvg color="#FCF269" style={[styles.fishIcon, styles.fishIcon1]} />
        <FishSvg color="#FCF269" style={[styles.fishIcon, styles.fishIcon2]} />
        <FishSvg color="#FCF269" style={[styles.fishIcon, styles.fishIcon3]} />
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
    <BookMark style={{ marginTop: 4 }} />
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
    fontSize: 15,
    marginBottom: 5,
    color: "#141F74",
    fontFamily: "Inter_400Regular",
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
    color: "#141F74",
    fontSize: 12,
    fontFamily: "AnekBangla_400Regular",
    lineHeight: 19,
    transform: "translateY(10px)",
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
    marginLeft: 10,
    // fontSize: screenWidth < 350 ? 14 : 16, // Responsive font size
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    color: "#141F74",
    flexShrink: 1,
    flex: 1,
    zIndex: 100,
  },
  packageButton: {
    backgroundColor: "#141F74",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  fishContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -40 }],
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fishIcon: {},
  fishIcon1: {
    transform: [{ rotate: "10deg" }],
  },
  fishIcon2: {
    transform: [{ rotate: "-10deg" }],
  },
  fishIcon3: {
    transform: [{ rotate: "20deg" }],
  },
});

export default Package;
