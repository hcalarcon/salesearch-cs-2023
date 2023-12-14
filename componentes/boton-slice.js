import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default BotonSlice = (props) => {
  const { texto, onPress } = props;

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onPress();

    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isPressed ? "lightblue" : "white" },
      ]}
      onPress={handlePress}
    >
      <View style={styles.containerl}>
        <Text style={styles.texto}>{texto}</Text>
      </View>
      <View style={styles.containerr}>
        <Icon name="chevron-right" size={20} color="#EB5D57" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 3,
  },
  containerl: {
    flex: 0.9,
  },
  containerr: {
    flex: 0.1,
  },
  texto: {
    fontSize: 15,
    paddingHorizontal: 20,
  },
});

//
