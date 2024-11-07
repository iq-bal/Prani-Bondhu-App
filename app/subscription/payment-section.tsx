import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useFonts, AnekBangla_500Medium } from "@expo-google-fonts/anek-bangla";

const PaymentSection = () => {
  let [fontsLoaded] = useFonts({
    AnekBangla_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.refundText}>৭ দিনে টাকা ফেরত সুবিধা</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <LinearGradient
          colors={["#9aafff", "#3b5bdb"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.buttonText}>৩৫০ টাকা প্রদান করুন</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.infoText}>
        প্যাকেজটি কেনার শেষ হলে আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন। বাড়তি
        কোনো টাকা কাট হবে না। আমরা আপনার ব্যাক্তিগত তথ্য প্রদান করা হতে বিরত
        থাকি
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  refundText: {
    fontSize: 12,
    color: "rgba(20, 31, 116, 0.4)",
    marginBottom: 20,
    fontFamily: "AnekBangla_500Medium",
  },
  button: {
    borderRadius: 10,
    overflow: "hidden",
  },
  gradient: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "AnekBangla_500Medium",
  },
  infoText: {
    marginTop: 20,
    fontSize: 12,
    color: "rgba(20, 31, 116, 0.5)",
    textAlign: "center",
    lineHeight: 20,
    fontFamily: "AnekBangla_500Medium",
  },
});

export default PaymentSection;
