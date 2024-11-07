import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import {
  useFonts,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";

const Header = () => {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    AnekBangla_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>সাবস্ক্রিপশন</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/subscription-history/subscription-history");
        }}
      >
        <FontAwesome
          name="history"
          size={24}
          color="#1A237E"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: "#FFF",
  },
  headerText: {
    fontSize: 25,
    color: "#141F74",
    fontFamily: "AnekBangla_600SemiBold",
  },
  icon: {
    fontSize: 24,
    color: "#1A237E",
  },
});
export default Header;
