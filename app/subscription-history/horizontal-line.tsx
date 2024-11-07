import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = ({
  color = "rgba(20, 31, 116, 1)",
  thickness = 1,
  marginVertical = 10,
}) => {
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: color,
          height: thickness,
          marginVertical: marginVertical,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    alignSelf: "center",
    width: "80%", // Adjust width as needed
  },
});

export default HorizontalLine;
