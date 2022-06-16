import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import SafeViewAndroid from "../theme/globalStyle";
import Input from "../components/input";
import RadioInput from "../components/radio-input";
import Button from "../components/button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

import { showMessage } from "react-native-flash-message";

const noteColorOptions = ["red", "blue", "green"];

export default function Update({ navigation, route, user }) {
  const noteTitle = route.params.title;
  const noteDescription = route.params.description;
  const color = route.params.color;
  const [title, setTitle] = useState(noteTitle);
  const [description, setDescription] = useState(noteDescription);
  const [noteColor, setNoteColor] = useState(color);
  const [loading, setLoading] = useState(false);

  const onPressUpdate = async () => {
    setLoading(true);
    try {
      setLoading(false);
      showMessage({
        message: "Note created successfully",
        type: "success",
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Input
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Input
        placeholder="Description"
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        value={description}
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
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Submit"
          customStyles={{ marginTop: 60, alignSelf: "center", width: "100%" }}
          onPress={onPressUpdate}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
});
