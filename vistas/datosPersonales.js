import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input } from "../componentes/input";
import { Botones } from "../componentes/botones";
import storage from "../utility/storage";
import { updateUser } from "../utility/api";

export default DatosPersonales = ({ navigation, route }) => {
  const { usuario: user } = route.params;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const obtenerDatosPersonales = async () => {
      try {
        setUsername(user.username);
        setEmail(user.emailbd || "Sin datos");
        setNombre(user.nombre || "Sin datos");
        setApellido(user.apellido || "Sin datos");
        setDni(user.dni || "88888888");
      } catch (error) {
        console.log("error", error);
      }
    };
    obtenerDatosPersonales();
  }, []);

  const handleUpdateUser = async () => {
    const usuarioActualizado = {
      ...user,
      apellido: apellido,
      dni: dni,
      emailbd: email,
      nombre: nombre,
      username: username,
    };
    try {
      await storage.save({ key: "usuario", data: usuarioActualizado });
      console.log(usuarioActualizado);
    } catch (error) {
      console.log("Error al guardar los datos actualizados:", error);
    }

    navigation.goBack();
  };

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.datosCuenta}>
        <Text style={styles.texto}>Nombre de usuario: </Text>
        <Input value={username} cambios={setUsername} />
        <Text style={styles.texto}>Email: </Text>
        <Input value={email} cambios={setEmail} />
        <Text style={styles.texto}>Nombre: </Text>
        <Input value={nombre} cambios={setNombre} />
        <Text style={styles.texto}>Apellido: </Text>
        <Input value={apellido} cambios={setApellido} />
        <Text style={styles.texto}>DNI: </Text>
        <Input value={dni} cambios={setDni} tipo="numeric" />
        {errorMessage ? <Subtitulos texto={errorMessage} font={15} /> : null}

        <View style={styles.botones}>
          <Botones
            texto="Actualizar Datos"
            onPres={() => {
              if (true) {
                handleUpdateUser();
              } else {
                setErrorMessage("Completar los datos necesarios");
              }
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  datosCuenta: {
    flex: 1,
    paddingVertical: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    width: "100%",
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
});
