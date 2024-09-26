import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FishSvg from "../components/vector/fish-svg";
import ParentContainer from "../components/utility/parent-container";
import Header from "../components/utility/header";
import { useRouter } from "expo-router";
import {
  useFonts,
  AnekBangla_400Regular,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";
import ProjectCard from "../components/utility/project-card";

const ProjectGroups = () => {
  const router = useRouter();

  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  const handleCardPress = () => {
    router.push("/packages/premium-packages");
  };

  let [fontsLoaded] = useFonts({
    AnekBangla_400Regular,
    AnekBangla_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ParentContainer>
      <Header
        onIconPress={() => {
          router.push("/");
        }}
        alignment="center"
      >
        <Text style={styles.title}>প্রকল্প সমূহ</Text>
      </Header>
      <ProjectCard
        marginRight={0}
        reducingFactor={20}
        handleCardPress={handleCardPress}
      />
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default ProjectGroups;
