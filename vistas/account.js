import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import storage from "../utility/storage";
import Subtitulos from "../componentes/subtitulos";
import Slice from "../componentes/boton-slice";
import { rutaImage } from "../constans/constantes";
import { useFocusEffect } from "@react-navigation/native";

const Account = ({ navigation }) => {
  const [user, setUser] = useState({});
  useFocusEffect(() => {
    const getUser = async () => {
      try {
        const user = await storage.load({ key: "usuario" });
        setUser(user);
      } catch (error) {
        console.log("error al obtener usuario", error);
      }
    };
    getUser();
  });

  const handleDatosPersonales = () => {
    navigation.navigate("DatosPersonales", { usuario: user });
  };

  const handleCambiarFoto = () => {
    navigation.navigate("CambiarFoto", { usuario: user });
  };

  const handleCerrarSession = async () => {
    try {
      await storage.remove({ key: "token" });
      await storage.remove({ key: "usuario" });

      navigation.navigate("Principal");
    } catch (e) {
      console.error("Error al intentar de eliminar token: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: `${rutaImage}/${user.img}` }}
          style={styles.img}
        ></Image>
        <View style={styles.subheader}>
          <Subtitulos texto={`Bienvenido ${user.username}`} font={20} />
          <Text>{user.emailbd}</Text>
        </View>
      </View>
      <Slice
        texto="Modificar datos personales"
        onPress={() => handleDatosPersonales()}
      ></Slice>
      <Slice
        texto="Cambiar contraseña"
        onPress={() => navigation.navigate("CambiarContrasena")}
      ></Slice>

      <Slice
        texto="Cambiar foto de perfil"
        onPress={() => handleCambiarFoto()}
      ></Slice>
      <Slice
        texto="Cerrar Sessión "
        onPress={() => handleCerrarSession()}
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
    width: 200,
    height: 200,
    borderRadius: 35,
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
                
              }}
            ></Botones>
          </View>
        </View>
      </ScrollView> */
}
