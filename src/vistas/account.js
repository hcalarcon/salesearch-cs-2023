import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import storage from " ../utility/storage";
import Subtitulos from "../componentes/subtitulos";
import { updateUser } from "../src/utility/api";
import Slice from "../componentes/boton-slice";

const Account = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [confirPassword, setConfirPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const updateDatos = async () => {
    const Data = await updateUser(
      username,
      nombre,
      apellido,
      dni,
      email,
      password
    );

    console.log(Data);
    // if (Data.status === 200) {
    //   console.log("success");
    // } else {
    // }
  };

  return (
    <View style={styles.container}>
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
      <Slice
        texto="Mooodificar datos personales"
        onPress={() => console.log("asd")}
      ></Slice>
      <Slice
        texto="Cambiar contraseña"
        onPress={() => console.log("alho")}
      ></Slice>

      <Slice
        texto="Cambiar foto de perfil"
        onPress={() => console.log("alho")}
      ></Slice>
      <Slice
        texto="Cerrar Sessión "
        onPress={() => console.log("alho")}
      ></Slice>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignContent: "center",
    padding: 10,
    paddingTop: 30,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 1,
  },
  header: {
    height: 100,
    marginVertical: 10,
    paddingHorizontal: 10,
    flex: 0.8,

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
    marginTop: 20,
  },
});

export default Account;

{
  /* <ScrollView>
      
       
        <Subtitulos texto="Modificar mis datos" font={15} />
        <View style={styles.datosCuenta}>
          <Text>Nombre de usuario: </Text>
          <Input value={username} cambios={setUsername} />
          <Text>Email: </Text>
          <Input value={email} />
          <Text>Nombre: </Text>
          <Input value={nombre} cambios={setNombre} />
          <Text>Apellido: </Text>
          <Input value={apellido} cambios={setApellido} />
          <Text>DNI: </Text>
          <Input value={dni} cambios={setDni} />
          <Text>Contraseña: </Text>
          <Input value={password} cambios={setPassword} />
          <Text>Confirmar contraseña: </Text>
          <Input value={confirPassword} cambios={setConfirPassword} />

          {errorMessage ? <Subtitulos texto={errorMessage} font={15} /> : null}

          <View style={styles.botones}>
            <Botones
              texto="Actualizar Datos"
              onPres={() => {
                if (
                  false
                  // username.trim().length > 0 &&
                  // nombre.trim().length > 0 &&
                  // apellido.trim().length > 0 &&
                  // email.trim().length > 0 &&
                  // dni.trim().length > 0 &&
                  // password.trim().length > 0
                ) {
                  setErrorMessage("Completar los datos necesarios");
                } else {
                  if (confirPassword.trim().length > 0) {
                    if (password === confirPassword) {
                      updateDatos();
                    } else {
                      setErrorMessage("Las contraseñas no coinciden");
                    }
                  } else {
                    updateDatos();
                  }
                }
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
      </ScrollView> */
}
