import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({
  placeholder,
  secureTextEntry,
  onChangeText,
  autoCapitalize,
  multiline,
  value,
}) {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        value={value}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
});
