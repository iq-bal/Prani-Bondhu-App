import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PlusIconProps {
  position: "left" | "right";
  onPress?: () => void;
}

const PlusIcon: React.FC<PlusIconProps> = ({ position, onPress }) => {
  return (
    <View
      style={[
        styles.iconWrapper,
        position === "left" ? styles.leftWrapper : styles.rightWrapper,
      ]}
    >
      <TouchableOpacity onPress={onPress} style={styles.plusIcon}>
        <Ionicons name="add" size={35} color={"rgba(255, 255, 255, 1)"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
  },
  leftWrapper: {
    alignItems: "flex-start",
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  plusIcon: {
    backgroundColor: "rgba(86, 103, 229, 1)",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    // marginHorizontal: 20, // Distance from the screen edges
  },
});

export default PlusIcon;
