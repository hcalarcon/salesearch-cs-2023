import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Botones } from "../componentes/botones";
import PasswordInput from "../componentes/passwordInput";

export default CambiarContra = () => {
  const handleCambiarPass = () => {
    console.log("cambiar pass");
  };
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirPassword, setConfirPassword] = useState("");

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.texto}>Ingresar la contraseña actual: </Text>
      <PasswordInput value={password} onchange={setPassword} />
      <Text style={styles.texto}>Nueva contraseña: </Text>
      <PasswordInput value={newPassword} onchange={setnewPassword} />
      <Text style={styles.texto}>Confirmar contraseña: </Text>
      <PasswordInput value={confirPassword} onchange={setConfirPassword} />

      <View style={styles.botones}>
        <Botones texto="Confirmar" onPres={() => handleCambiarPass} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botones: {
    width: "100%",
    marginTop: 40,
  },
  texto: {
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
});
