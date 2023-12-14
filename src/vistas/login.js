import React, { useState } from "react";
import { View, StyleSheet, Image, StatusBar, ScrollView } from "react-native";
import { Botones, Link } from "../componentes/botones";
import Subtitulo from "../componentes/subtitulos";
import { Input } from "../componentes/input";
import { LogCheck } from "../src/utility/api";
import storage from "../src/utility/storage";
import PasswordInput from "../../componentes/passwordInput";

const rutaimg = "../assets/login_ico.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(""); //en este estado se guardan el email
  const [password, setPassword] = useState(""); // en este estado se guardan el password
  const [errorMessage, setErrorMessage] = useState(""); // en este estado se guada el mensaje de error
  const [ocultarTexto, setOcultarTexto] = useState(true); // Establecer en false por defecto

  const toggleOcultarTexto = () => {
    setOcultarTexto(!ocultarTexto);
  };

  const handleLogin = async (email, password) => {
    const Data = await LogCheck(email, password);

    //desestructuro los datos que vienen desde el backend
    const { success, token, username, userId, nombre, apellido, emailbd, dni } =
      Data;
    if (success) {
      //creao un objeto usuario, usando los datos de la base de datos
      const usuario = {
        username,
        userId,
        nombre,
        apellido,
        emailbd,
        dni,
      };
      storage.save({ key: "token", data: { token } }); //guardo el token de sesión
      storage.save({ key: "usuario", data: usuario }); // guardo el usuario
      navigation.navigate("TabNavs");
    } else {
      setErrorMessage("usuario o contraseña incorrecto");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"red"} />
      <ScrollView>
        <View style={styles.image}>
          <Subtitulo texto="¡¡Que bueno verte por aca!!" font={20} />
          <Image source={require(rutaimg)} style={styles.img}></Image>
        </View>
        <View style={styles.sec30}>
          <Input
            texto="Ingresar email"
            tipo="email"
            ico="account"
            cambios={setEmail}
          ></Input>

          <PasswordInput
            value={password}
            label="ingresar contraseña"
            onchange={setPassword}
          />

          {errorMessage ? <Subtitulo texto={errorMessage} font={15} /> : null}

          <Botones
            texto="Ingresar"
            onPres={() => {
              if (email.trim().length === 0 || password.trim().length === 0) {
                setErrorMessage("ingresar usuario y contraseña");
              } else {
                handleLogin(email, password);
              }
            }}
          />
          <Link
            texto="Recuperar Contraseña"
            onPres={() => console.log(email)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 350,
  },
  boton: {
    marginTop: 20,
  },
  sec30: {
    flex: 0.6,
    borderRadius: 25,
    top: 25,
    alignItems: "center",
    textAlign: "center",
    gap: 15,
    height: 400,
  },
  img: {
    width: 200,
    height: 250,
    borderRadius: 30,
    top: 30,
  },
  textinput: {
    width: 350,
    fontSize: 15,
  },
});

export default Login;
