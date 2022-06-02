import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SafeViewAndroid from "../theme/globalStyle";

export default function Signin() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View>
        <Text>Signin Screen</Text>
      </View>
    </SafeAreaView>
  );
}
