import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Header from "../components/utility/header";
import Sidebar from "../components/utility/sidebar";
import ParentContainer from "../components/utility/parent-container";
import PosterSvg from "../components/vector/poster-svg";
import WeatherSvg from "../components/vector/weather-svg";
import Fishing from "../components/utility/fishing";
import Package from "../components/utility/package";
import { useRouter } from "expo-router";

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
import ProjectCard from "../components/utility/project-card";

const screenWidth = Dimensions.get("window").width;

const Home = () => {
  const router = useRouter();
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const handleCardPress = () => {
    router.push("/packages/premium-packages");
  };

  const handleViewAll = () => {
    router.push("/project-group/project-group");
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
    <ParentContainer>
      <Header iconType="options" onIconPress={toggleSidebar} alignment="right">
        <TouchableOpacity style={styles.dpContainer}>
          <Image
            source={{
              uri: "https://via.placeholder.com/100",
            }}
            style={styles.dp}
          />
        </TouchableOpacity>
      </Header>
      <View style={styles.titleSection}>
        <Text style={styles.mainTitle}>স্বাগতম, রফিক উদ্দিন </Text>
        <Text style={styles.subtitle}>আজ ৭ই এপ্রিল, রবিবার, ২০২৪</Text>
      </View>

      <TouchableOpacity onPress={handleViewAll} style={styles.viewAll}>
        <Text style={styles.viewAllText}>সব দেখুন</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ margin: 0 }}
      >
        <ProjectCard
          handleCardPress={handleCardPress}
          reducingFactor={100}
          marginRight={10}
        />
        <ProjectCard
          handleCardPress={handleCardPress}
          reducingFactor={100}
          marginRight={10}
        />
      </ScrollView>

      <PosterSvg style={{ marginBottom: 20, width: screenWidth }} />
      <WeatherSvg style={{ backgroundColor: "", marginBottom: 20 }} />
      <Fishing
        pondName="ইলিশ দিঘি"
        pondDetails={{ finished: "৫", running: "১" }}
        filterActive={true}
      />
      <Fishing
        pondName="পাঙ্গাস দিঘি"
        pondDetails={{ finished: "৫", running: "১" }}
        filterActive={true}
      />
      <Package text="মেয়াদ শেষ হবে ১৫ই জুলাই ২০২৪" reducingFactor={20} />
      <View style={{ marginBottom: 30 }} />
      {/* Sidebar */}
      <Sidebar visible={isSidebarVisible} onClose={closeSidebar} />
    </ParentContainer>
  );
};

const styles = StyleSheet.create({
  dpContainer: {},
  dp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  titleSection: {
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 20,
    // color: "#000000",
    fontFamily: "AnekBangla_600SemiBold",
  },
  subtitle: {
    fontSize: 12,
    // color: "rgba(0, 0, 0, 1)",
    fontFamily: "AnekBangla_300Light",
  },
  viewAll: {
    marginTop: 0,
    marginBottom: 15,
    // marginRight: 20,
  },
  viewAllText: {
    textAlign: "right",
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default Home;
