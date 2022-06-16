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

export default function Create({ navigation, route, user }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteColor, setNoteColor] = useState("blue");
  const [loading, setLoading] = useState(false);

  const onPressCreate = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        title: title,
        description: description,
        color: noteColor,
        uid: user.uid,
      });
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
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Submit"
          customStyles={{ marginTop: 60, alignSelf: "center", width: "100%" }}
          onPress={onPressCreate}
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
