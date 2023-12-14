import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export function Botones(props) {
  const { texto, onPres } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    try {
      setIsLoading(true);
      await onPres();
      setIsLoading(false);
    } catch (error) {
      console.error("Error al ejecutar la tarea:", error);
      setIsLoading(false);
    }
  };
  return (
    <TouchableOpacity style={styles.boton} onPress={handlePress}>
      {isLoading ? (
        <ActivityIndicator color="red" />
      ) : (
        <Text style={styles.text}>{texto}</Text>
      )}
    </TouchableOpacity>
  );
}

export function Link(props) {
  const { texto, onPres } = props;

  return (
    <View>
      <TouchableOpacity onPress={onPres}>
        <Text style={styles.link}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "white",
    paddingVertical: 10,
    margin: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
  },
  text: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
  },
  link: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
});
