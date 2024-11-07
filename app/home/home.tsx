import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Animated,
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
  AnekBangla_300Light,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";

import ProjectCard from "../components/utility/project-card";

const screenWidth = Dimensions.get("window").width;

const Home = () => {
  const router = useRouter();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;

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
    AnekBangla_300Light,
    AnekBangla_600SemiBold,
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

      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ margin: 0 }}
        snapToInterval={200} // Adjust as per card width + margin
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {[0, 1].map((_, index) => {
          const inputRange = [
            (index - 1) * 210,
            index * 210,
            (index + 1) * 210,
          ]; // Adjust based on card width
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={{
                transform: [{ scale }],
                marginRight: 5,
              }}
            >
              <ProjectCard
                handleCardPress={handleCardPress}
                reducingFactor={100}
                marginRight={0}
              />
            </Animated.View>
          );
        })}
      </Animated.ScrollView>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PosterSvg style={{ marginBottom: 20, width: screenWidth }} />
        <WeatherSvg style={{ backgroundColor: "", marginBottom: 20 }} />
      </View>

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
      <Package text="মেয়াদ শেষ হবে ১৫ই জুলাই ২০২৪" reducingFactor={20} />
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
    fontFamily: "AnekBangla_600SemiBold",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "AnekBangla_300Light",
  },
  viewAll: {
    marginTop: 0,
    marginBottom: 15,
  },
  viewAllText: {
    textAlign: "right",
    fontSize: 12,
    fontFamily: "AnekBangla_600SemiBold",
  },
});

export default Home;
