import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import SafeViewAndroid from "../theme/globalStyle";
import Button from "../components/button";
import Input from "../components/input";
import { auth, db } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const genderOptions = ["Male", "Female"];

export default function Signup() {
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    setLoading(true);
    try {
      //create user with email and password
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //add user profile to database
      await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        age: age,
        gender: gender,
        uid: result.user.uid,
      });
      setLoading(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Full name"
          onChangeText={(text) => setName(text)}
          autoCapitalize={"words"}
        />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />
        <View style={{ marginVertical: 10 }}>
          <Text>Select Gender</Text>
        </View>
        {genderOptions.map((option) => {
          const selected = option === gender;
          return (
            <Pressable
              key={option}
              style={styles.radioContainer}
              onPress={() => setGender(option)}
            >
              <View
                style={[
                  styles.outerCircle,
                  selected && styles.selectedOuterCircle,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    selected && styles.selectedInnerCircle,
                  ]}
                />
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.pressableContainer}>
        <Button
          title={"Sign up"}
          customStyles={{ alignSelf: "center", marginBottom: 60 }}
          onPress={signup}
        />
        <Pressable>
          <Text>
            Already have an account?{" "}
            <Text
              style={{
                color: "green",
                // fontWeight: "bold",
              }}
            >
              Sign in
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginImage: {
    alignSelf: "center",
    height: 200,
    width: 300,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  pressableContainer: {
    // flex: 1,
    // justifyContent: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#CFCFCF",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 15,
    width: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#CFCFCF",
  },

  selectedOuterCircle: { borderColor: "orange" },
  selectedInnerCircle: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
});
