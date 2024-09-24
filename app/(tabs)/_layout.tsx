import { Text } from "react-native";
import { Tabs, Stack } from "expo-router";
import SvgComponent from "../components/vector/svg-component";
import HomeSvg from "../components/vector/home-svg";
import ProfileSvg from "../components/vector/profile-svg";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let IconComponent;
          let color = focused ? "rgba(86, 103, 229, 1)" : "#EE57A4";

          if (route.name === "home") {
            IconComponent = <HomeSvg color={color} />;
          } else if (route.name === "projectGroup") {
            IconComponent = <SvgComponent color={color} />;
          } else if (route.name === "fishingDetails") {
            IconComponent = <SvgComponent color={color} />;
          } else if (route.name === "profile") {
            IconComponent = <ProfileSvg color={color} />;
          }
          return IconComponent;
        },
        tabBarLabel: ({ focused }) => {
          let label;
          let color = focused ? "rgba(86, 103, 229, 1)" : "#EE57A4";

          if (route.name === "home") {
            label = "মূলপাতা";
          } else if (route.name === "projectGroup") {
            label = "প্রকল্প";
          } else if (route.name === "fishingDetails") {
            label = "চাষ";
          } else if (route.name === "profile") {
            label = "এ্যাকাউন্ট";
          }
          return <Text style={{ color, fontSize: 12 }}>{label}</Text>;
        },
        tabBarStyle: {
          backgroundColor: "#EBF3FF",
          paddingVertical: 12,
          borderRadius: 25,
          marginHorizontal: 25,
          height: 65,
          marginBottom: 15,
        },
        tabBarItemStyle: {
          alignItems: "center",
          paddingBottom: 10,
        },
      })}
    >
      <Tabs.Screen name="projectGroup" />
      <Tabs.Screen name="home" />
      <Tabs.Screen name="fishingDetails" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;
