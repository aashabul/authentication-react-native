import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

export default function RadioInput({ label, value, setValue, size = "small" }) {
  let selected = label === value;
  return (
    <TouchableOpacity onPress={() => setValue(label)}>
      <View>
        <View style={styles.radioContainer}>
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
          <Text>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  pressableContainer: {
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
