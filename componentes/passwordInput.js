import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default PasswordInput = (props) => {
  const [ocultarTexto, setOcultarTexto] = useState(true); // Establecer en false por defecto

  const toggleOcultarTexto = () => {
    setOcultarTexto(!ocultarTexto);
  };

  const { value, label, onchange } = props;

  return (
    <TextInput
      value={value}
      label={label}
      style={styles.textinput}
      inputMode="numeric"
      textColor="black"
      activeOutlineColor="red"
      mode="outlined"
      onChangeText={onchange}
      secureTextEntry={ocultarTexto}
      right={
        <TextInput.Icon
          icon={ocultarTexto ? "eye" : "eye-off"}
          onPress={toggleOcultarTexto}
        />
      }
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  textinput: {
    width: 350,
    fontSize: 15,
    alignSelf: "center",
  },
});
