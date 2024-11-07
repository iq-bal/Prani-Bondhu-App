import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";

const Header = ({ title, onBackPress }: any) => {
  let [fontsLoaded] = useFonts({
    AnekBangla_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#3b5bdb" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 10,
    backgroundColor: "#e1eaff",
    borderRadius: 20,
    padding: 5,
  },
  headerTitle: {
    fontSize: 25,
    color: "rgba(20, 31, 116, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default Header;
