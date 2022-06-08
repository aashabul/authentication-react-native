import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import SafeViewAndroid from "../theme/globalStyle";

export default function Home() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}
