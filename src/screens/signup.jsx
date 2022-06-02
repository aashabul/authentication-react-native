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

const genderOptions = ["Male", "Female"];

export default function Signup() {
  const [gender, setGender] = useState(null);
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <View style={styles.inputContainer}>
        <Input placeholder="Full name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Age" />
        <Input placeholder="Password" secureTextEntry />
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

        {/* <Pressable style={styles.radioContainer}>
          <View
            style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
          >
            <View
              style={[
                styles.innerCircle,
                selected && styles.selectedInnerCircle,
              ]}
            />
          </View>
          <Text style={styles.radioText}>Female</Text>
        </Pressable> */}
      </View>

      <View style={styles.pressableContainer}>
        <Button
          title={"Sign up"}
          customStyles={{ alignSelf: "center", marginBottom: 60 }}
        />
        <Pressable
        // onPress={() => {
        //   navigation.navigate("Signin");
        // }}
        >
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
    paddingVertical: 20,
  },
  pressableContainer: {
    flex: 1,
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
