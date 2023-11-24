import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Botones, Link } from "../componentes/botones";
import { Input } from "../componentes/input";
import Subtitulo from "../componentes/subtitulos";
import { createUser } from "../utility/api";

const rutaimg = "../assets/singup.png";

const Sigup = ({ navigation }) => {
  //hook de javascript para manejas los estados del componentes
  const [email, setEmail] = useState(""); //en este estado se guarda el email
  const [password, setPassword] = useState(""); //en este estado se guarda el password
  const [username, setUsername] = useState(""); //en este estado se guarda el username
  const [confirpassword, setConfirpassword] = useState(""); //en este estado se guarda el password
  const [errorMessage, setErrorMessage] = useState(""); // en este estado se guada el mensaje de error

  const handleSingup = async (username, email, password) => {
    const Data = await createUser(username, email, password);
    console.log(Data);
    if (Data.success) {
      navigation.navigate("NabTavs");
    } else {
      {
        Data.status
          ? 400(setErrorMessage("ya existe un usuario con el email ingreado"))
          : setErrorMessage("no se pudo crear la cuenta, intente nuevamente");
      }
    }
  };

  return (
    <View style={estilo.principal}>
      <ScrollView>
        <View style={estilo.sec1}>
          <Image source={require(rutaimg)} style={estilo.img}></Image>
          <Subtitulo texto="¿Vamos a ahorrar?" />
          <Input
            texto="Nombre de usuario"
            tipo="email"
            ico="account"
            cambios={setUsername}
          ></Input>
          <Input
            texto="Ingresar email"
            tipo="email"
            ico="mail"
            cambios={setEmail}
          ></Input>
          <Input
            texto="contraseña"
            tipo="numeric"
            ico="eye"
            cambios={setPassword}
          ></Input>
          <Input
            texto="confirmar contraseña"
            tipo="numeric"
            ico="eye"
            cambios={setConfirpassword}
          ></Input>
          {errorMessage ? <Subtitulo texto={errorMessage} font={15} /> : null}
        </View>
        <View style={estilo.sec2}>
          <Botones
            texto="Crear cuenta"
            onPres={() => {
              if (
                email.trim().length !== 0 &&
                password.trim().length !== 0 &&
                username.trim().length !== 0 &&
                confirpassword.trim().length !== 0
              ) {
                if (password === confirpassword) {
                  setErrorMessage("");
                  handleSingup(username, email, password);
                } else {
                  setErrorMessage("Las contraseñas no coinciden");
                }
              } else {
                setErrorMessage("Completar los datos");
              }
            }}
          />
          <Link
            texto="¿ya tenes cuenta? inicia sesión acá"
            onPres={
              () => {
                console.log("est");
              }

              // navigation.navigate('Login')
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const estilo = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "white",
  },
  sec1: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    height: 650,
  },
  sec2: {
    flex: 0.3,
    alignItems: "center",
    gap: 10,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 25,
  },
});

export default Sigup;
