import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  AnekBangla_400Regular,
  AnekBangla_600SemiBold,
  useFonts,
} from "@expo-google-fonts/anek-bangla";
const PondCard = () => {
  const router = useRouter();
  let [fontsLoaded] = useFonts({
    AnekBangla_400Regular,
    AnekBangla_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
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
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "AnekBangla_600SemiBold",
    color: "#FFF",
  },

  pondDetails: {
    fontSize: 10,
    fontFamily: "AnekBangla_400Regular",
    color: "#FFF",
    marginTop: 5,
  },

  pondDate: {
    fontSize: 12,
    color: "#FFF",
    marginTop: 5,
    fontFamily: "AnekBangla_400Regular",
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
});

export default PondCard;
