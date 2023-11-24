import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Constants from "expo-constants";
import tokenExist from "../utility/auth";

const Inicial = ({ navigation }) => {
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const verificar = async () => {
      try {
        const token = await tokenExist();

        if (token) {
          navigation.navigate("TabNavs");
        } else {
          navigation.navigate("Principal");
        }
      } catch (err) {
        console.error("Error al verificar el token:", err);
      } finally {
        setCargando(false);
      }
    };

    verificar();
  }, [navigation]);

  if (cargando) {
    // Muestra el indicador de carga mientras se verifica el token
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});

export default Inicial;
