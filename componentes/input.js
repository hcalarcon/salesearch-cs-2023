import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export function Input(props) {
  const { texto, tipo, type, ico, cambios, value } = props;

  return (
    <View>
      <TextInput
        value={value}
        label={texto}
        style={styles.textinput}
        inputMode={tipo}
        textColor="black"
        activeOutlineColor="red"
        textContentType={type}
        mode="outlined"
        onChangeText={cambios}
        right={<TextInput.Icon icon={ico} />}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    width: 350,
    fontSize: 15,
    alignSelf: "center",
  },
  texto: {
    marginTop: 10,
  },
});
