import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SafeViewAndroid from "../theme/globalStyle";
import Input from "../components/input";
import RadioInput from "../components/radio-input";

const noteColorOptions = ["red", "blue", "green"];

export default function Create({ navigation, route, user }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteColor, setNoteColor] = useState("blue");
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Input placeholder={"Title"} onChangeText={(text) => setTitle(text)} />
      <Input
        placeholder={"Description"}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
      />
      <View style={{ height: 40 }}>
        <Text>Select your note color</Text>
      </View>
      {noteColorOptions.map((option, index) => (
        <RadioInput
          key={index}
          label={option}
          value={noteColor}
          setValue={setNoteColor}
        />
      ))}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
});
