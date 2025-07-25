import React, { ReactNode } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomMenuIcon from "./custom-menu-icon";

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

interface HeaderProps {
  title?: string;
  children?: ReactNode;
  alignment?: "left" | "center" | "right";
  iconType?: "back" | "options";
  onIconPress?: () => void;
}

function Header({
  title,
  children,
  alignment = "center",
  iconType = "back",
  onIconPress,
}: HeaderProps) {
  const alignItems = () => {
    switch (alignment) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

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
    <View style={styles.header}>
      {iconType === "back" ? (
        <TouchableOpacity style={styles.iconButton} onPress={onIconPress}>
          <Ionicons name="arrow-back" size={20} color="#5667E5" />
        </TouchableOpacity>
      ) : (
        <View
          style={[{ ...styles.iconButton, backgroundColor: "transparent" }]}
        >
          <CustomMenuIcon onPress={onIconPress} />
        </View>
      )}
      <View style={[styles.titleContainer, { alignItems: alignItems() }]}>
        {title ? <Text style={styles.headerTitle}>{title}</Text> : children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconButton: {
    backgroundColor: "#EBF3FF",
    borderRadius: 50,
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default Header;
