import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Subtitulos from "../componentes/subtitulos";
import { Input } from "../componentes/input";
import Picker from "../componentes/picker";

const Newpublish = ({ navigator }) => {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <Subtitulos
          texto="¿Encontraste una ofertas? ¡¡publicala!!"
          font={20}
        ></Subtitulos>
        <Input
          texto="Nombre del producto"
          tipo="text"
          ico=""
          cambios={setProducto}
        ></Input>

        <Input
          texto="Precio"
          tipo="decimal"
          ico=""
          type="none"
          cambios={setPrecio}
        ></Input>
        <Picker />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    padding: 5,
    gap: 5
  },
});

export default Newpublish;
