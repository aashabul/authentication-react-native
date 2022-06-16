import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Signin from "./src/screens/signin";
import Signup from "./src/screens/signup";
import Update from "./src/screens/update";
import Create from "./src/screens/create";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./src/firebase/firebase.config";
import FlashMessage from "react-native-flash-message";

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   signOut(auth);
  // }, []);

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return authSubscription;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen name="Home" options={{ headerShown: false }}>
                {(props) => <Home {...props} user={user} />}
              </Stack.Screen>
              <Stack.Screen name="Create">
                {(props) => <Create {...props} user={user} />}
              </Stack.Screen>
              <Stack.Screen name="Update" component={Update} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
