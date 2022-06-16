import React, { useEffect, useState } from "react";
import SafeViewAndroid from "../theme/globalStyle";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export default function Home({ navigation, route, user }) {
  // console.log("user-->", user);
  const [notes, setNotes] = useState([]);

  const Item = ({ title, color, description }) => (
    <Pressable
      style={{
        backgroundColor: color,
        marginBottom: 25,
        borderRadius: 16,
        padding: 15,
      }}
      onPress={() => {
        navigation.navigate("Update", { title, description, color });
      }}
    >
      <Text style={{ fontSize: 24, color: "white" }}>{title}</Text>
      <Text style={{ fontSize: 18, color: "white", marginTop: 6 }}>
        {description}
      </Text>
    </Pressable>
  );

  //fetch notes collection
  useEffect(() => {
    const q = query(collection(db, "notes"), where("uid", "==", user.uid));
    const notesListenerSubscription = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setNotes(list);
    });
    return notesListenerSubscription;
  }, []);
  // console.log("notes-->", notes);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      color={item.color}
      description={item.description}
    />
  );

  const onPressCreate = () => {
    navigation.navigate("Create");
  };
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
      <View style={styles.noteContainer}>
        <Text>my notes</Text>
        <Pressable onPress={onPressCreate}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
      </View>

      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ padding: 20 }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  noteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
