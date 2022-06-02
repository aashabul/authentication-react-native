import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import SafeViewAndroid from "../theme/globalStyle";
import Button from "../components/button";
import Input from "../components/input";

export default function Signin({ navigation }) {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Image
        source={require("../../assets/login.png")}
        style={styles.loginImage}
      />
      <Text style={styles.text}>Never forget your notes</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.pressableContainer}>
        <Button
          title={"Login"}
          customStyles={{ alignSelf: "center", marginBottom: 60 }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text>
            Don't have an account?{" "}
            <Text
              style={{
                color: "green",
                // fontWeight: "bold",
              }}
            >
              Sign up
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
    marginVertical: 25,
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
    paddingVertical: 25,
  },
  pressableContainer: {
    flex: 1,
    // justifyContent: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
});
