import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FishSvg from "../components/vector/fish-svg";
import ParentContainer from "../components/utility/parent-container";
import Header from "../components/utility/header";
import { useRouter } from "expo-router";

const ProjectGroups = () => {
  const router = useRouter();

  const handleBackPress = () => {
    console.log("Back button pressed");
  };

  const handleCardPress = () => {
    router.push("/packages/premium-packages");
  };

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
      <View style={styles.container}>
        <TouchableOpacity onPress={handleCardPress} style={styles.card}>
          <View style={styles.iconContainer}>
            <FishSvg style={[styles.fishIcon, styles.fishIconTop]} />
            <FishSvg style={[styles.fishIcon, styles.fishIconLeft]} />
            <FishSvg style={[styles.fishIcon, styles.fishIconRight]} />
          </View>
          <View style={styles.circleShape} />
          <Text style={styles.cardTitle}>মাছ চাষ প্রকল্প</Text>
          <Text style={styles.cardSubtitle}>৩ টি প্রকল্প চলমান রয়েছে</Text>
        </TouchableOpacity>
      </View>
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
  backButton: {
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#3C4DBD",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  iconContainer: {
    position: "absolute",
    left: 30,
    bottom: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  fishIcon: {
    width: 30,
    height: 30,
  },
  fishIconTop: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: -15 }],
  },
  fishIconLeft: {
    position: "absolute",
    left: 0,
    bottom: 0,
    transform: [{ translateX: 10 }],
  },
  fishIconRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    transform: [{ translateX: 15 }],
  },
  circleShape: {
    width: 100,
    height: 100,
    backgroundColor: "#5667E5",
    borderRadius: 50,
    position: "absolute",
    right: -10,
    top: -30,
  },
  cardTitle: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "900",
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#D1D1D1",
    fontWeight: "200",
  },
});

export default ProjectGroups;
