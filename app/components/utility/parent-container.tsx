import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ParentContainerProps {
  children: ReactNode;
}

function ParentContainer({ children }: ParentContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 25,
    // paddingVertical: 20,
    paddingTop: 20,
  },
  container: {
    flexGrow: 1,
  },
});

export default ParentContainer;
