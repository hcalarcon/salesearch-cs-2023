import React from "react";
import { StyleSheet, View, ImageBackground, Image, Alert } from "react-native";
import { Botones } from "../componentes/botones";

const fbgimage = "../assets/background.jpg";
const bgimage = "../assets/img_pantalla_inicio.png";

const Principal = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require(fbgimage)}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.imagen}>
          <Image source={require(bgimage)} style={styles.img_inicio} />
        </View>
        <View style={styles.botones}>
          <Botones
            texto="Iniciar Sesión"
            onPres={() => navigation.navigate("Login")}
          />
          <Botones
            texto="Crear Cuenta"
            onPres={() => navigation.navigate("Sigup")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },

  botones: {
    flex: 0.2,
  },

  img_inicio: {
    width: 300,
    height: 300,
    borderRadius: 200,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.5,
    backgroundColor: "#161616",
  },
  Text: {
    top: 50,
    color: "black",
    fontSize: 20,
    marginLeft: 15,
  },

  TextInput: {
    top: 50,
    color: "black",
    fontSize: 25,
    borderColor: "#000",
    borderBottomWidth: 2,
    margin: 10,
  },

  Titulo: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
    top: 10,
  },
});

export default Principal;
