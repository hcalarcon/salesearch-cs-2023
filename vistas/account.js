import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Constants from "expo-constants";
import storage from "../utility/storage";
import { Botones } from "../componentes/botones";
import { Input } from "../componentes/input";
import Subtitulos from "../componentes/subtitulos";

const Account = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");

  useEffect(() => {
    const obtener = async () => {
      try {
        const token = await storage.load({ key: "token" });
        const user = await storage.load({ key: "usuario" });
        setUsername(user.username);
        setEmail(user.emailbd);
        setNombre(user.nombre);
        setApellido(user.apellido);
        setDni(user.dni);
      } catch (error) {
        console.log("error", error);
      }
    };

    obtener();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* seccion para los input */}
        <View style={styles.header}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.img}
          ></Image>
          <View style={styles.subheader}>
            <Subtitulos texto={`Bienvenido ${username}`} font={20} />
            <Text>{email}</Text>
          </View>
        </View>
        <Subtitulos texto="Modificar mis datos" font={15} />
        <View style={styles.datosCuenta}>
          
          <Text>Nombre de usuario: </Text>
          <Input value={username} cambios={setUsername} />
          <Text>Email: </Text>
          <Input value={email} />
          <Text>Nombre: </Text>
          <Input value={nombre} cambios={setNombre} />
          <Text>Apellido: </Text>
          <Input value={apellido}  />
          <Text>DNI: </Text>
          <Input value={dni} />
          <Text>Contraseña: </Text>
          <Input  />
          <Text>Confirmar contraseña: </Text>
          <Input  />
          <View style={styles.botones}>
            <Botones
            texto="Actualizar Datos"
            onPres={() => {
              console.log(email);
            }}
          />
          <Botones
            texto="Cerrar Sesión"
            onPres={() => {
              storage.remove({ key: "token" });
              storage.remove({ key: "usuario" });
              navigation.navigate("Principal");
            }}
          ></Botones>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignContent: "center",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
    borderColor: "red",
    borderWidth: 1,
  },
  header: {
    height: 100,
    marginVertical: 10,
    paddingHorizontal: 10,
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
  },
  subheader: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  datosCuenta: {
    height: 700,
    flex: 0.8,
    padding: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderColor: "#EF847C",
    borderWidth: 1,
    backgroundColor: "#EF847C",
    alignItems: "center",
  },
  botones: {
    flex: 1,
    width: "100%",
    marginTop: 20
  }
});

export default Account;
