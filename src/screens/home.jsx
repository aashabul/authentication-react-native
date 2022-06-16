import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import React from "react";
import SafeViewAndroid from "../theme/globalStyle";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation, route, user }) {
  // console.log("user-->", user);
  const onPressCreate = () => {
    navigation.navigate("Create");
  };
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.conainer]}>
      <View style={styles.noteContainer}>
        <Text>my notes</Text>
        <Pressable onPress={onPressCreate}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  conainer: {
    flex: 1,
  },
  noteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
