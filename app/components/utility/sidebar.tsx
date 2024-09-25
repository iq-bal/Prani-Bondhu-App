import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BlurView } from "expo-blur";

import { useRouter } from "expo-router";
import {
  AnekBangla_300Light,
  AnekBangla_400Regular,
  AnekBangla_600SemiBold,
} from "@expo-google-fonts/anek-bangla";

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

const Sidebar = ({ visible, onClose }: SidebarProps) => {
  const router = useRouter();
  const translateX = React.useRef(new Animated.Value(-300)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <Animated.View
        style={[styles.sidebarContainer, { transform: [{ translateX }] }]}
      >
        {/* Back Icon */}
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color="rgba(20, 31, 116, 1)"
            />
          </TouchableOpacity>
        </View>

        {/* User Information */}
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://via.placeholder.com/100",
            }}
            style={styles.dp}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>জামিল উদ্দিন</Text>
            <Text style={styles.role}>জোড়ালগঞ্জ মিরশরাই</Text>
          </View>
        </View>

        {/* Sidebar Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionItem}>
            <Ionicons
              name="language-outline"
              size={20}
              color="rgba(20, 31, 116, 1)"
            />
            <Text style={styles.optionText}>ভাষা</Text>
            <Text style={styles.optionSecondaryText}>বাংলা</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons
              name="clipboard-outline"
              size={20}
              color="rgba(20, 31, 116, 1)"
            />
            <Text style={styles.optionText}>সাবস্ক্রিপশন</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons
              name="download-outline"
              size={20}
              color="rgba(20, 31, 116, 1)"
            />
            <Text style={styles.optionText}>রিপোর্ট ডাউনলোড</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons
              name="headset-outline"
              size={20}
              color="rgba(20, 31, 116, 1)"
            />
            <Text style={styles.optionText}>কাস্টমার কেয়ার</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons
              name="grid-outline"
              size={20}
              color="rgba(20, 31, 116, 1)"
            />
            <Text style={styles.optionText}>ডেভেলপমেন্ট</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/login");
            }}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>লগ আউট</Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>APP VERSION 1.0</Text>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  sidebarContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  backIconContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(41, 53, 146, 1)",
    padding: 10,
    borderRadius: 10,
  },
  dp: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  nameContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 15,
    // fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },
  role: {
    fontSize: 10,
    color: "rgba(205, 222, 8, 1)",
    fontFamily: "AnekBangla_600SemiBold",
  },
  optionsContainer: {
    flex: 1,
    marginVertical: 20,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginBottom: 10,
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  optionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: "rgba(21, 33, 118, 1)",
    fontFamily: "AnekBangla_400Regular",
  },
  optionSecondaryText: {
    fontSize: 10,
    color: "#666",
    fontFamily: "AnekBangla_300Light",
  },
  logoutContainer: {
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
  },
  logoutText: {
    fontSize: 14,
    color: "rgba(21, 33, 118, 1)",
    textAlign: "center",
    fontFamily: "AnekBangla_400Regular",
  },
  versionText: {
    marginTop: 10,
    fontSize: 12,
    color: "rgba(21, 33, 118, 1)",
    fontFamily: "AnekBangla_400Regular",
  },
});

export default Sidebar;
