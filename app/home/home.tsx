import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../components/utility/header";
import Sidebar from "../components/utility/sidebar";
import ParentContainer from "../components/utility/parent-container";
import PosterSvg from "../components/vector/poster-svg";
import WeatherSvg from "../components/vector/weather-svg";
import Fishing from "../components/utility/fishing";
import Package from "../components/utility/package";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

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
      <PosterSvg style={{ marginBottom: 20 }} />
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
      <Package text="মেয়াদ শেষ হবে ১৫ই জুলাই ২০২৪" />
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
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "100",
  },
});

export default Home;
