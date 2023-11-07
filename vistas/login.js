import React, { useState } from "react";
import { View, StyleSheet, Image, StatusBar, ScrollView } from "react-native";
import { Botones, Link } from "../componentes/botones";
import Subtitulo from "../componentes/subtitulos"
import { Input } from "../componentes/input"
import { LogCheck } from "../api"

const rutaimg = '../assets/login_ico.png'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState(""); //en este estado se guardan el email
    const [password, setPassword] = useState("");// en este estado se guardan el password
    const [errorMessage, setErrorMessage] = useState("");// en este estado se guada el mensaje de error

    const handleLogin = async (email, password) => {
        const Data = await LogCheck(email, password)
        
        if (Data.success) {
            navigation.navigate("TabNavs")
        } else {
            setErrorMessage("usuario o contraseña incorrecto");
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={"red"} />
            <ScrollView>
                <View style={styles.image}>
                    <Subtitulo texto="¡¡Que bueno verte por aca!!" font={20} />
                    <Image source={require(rutaimg)} style={styles.img}></Image>
                </View>
                <View style={styles.sec30}>
                    <Input texto="Ingresar email" tipo="email" ico="account" cambios={setEmail}></Input>
                    
                    <Input texto="Ingresar contraseña" tipo="numeric" ico="eye" cambios={setPassword}> </Input>
                    
                    {errorMessage ? (
                        <Subtitulo texto={errorMessage} font={15} />
                    ) : null }

                    <Botones texto="Ingresar" onPres={() => {
                        
                        if (email === "" || password === "") {
                            setErrorMessage("ingresar usuario y contraseña")
                            
                        } else {
                            handleLogin(email, password)
                        }
                    }} />
                    <Link texto="Recuperar Contraseña" onPres={() => console.log(email)} />
                </View>
            </ScrollView>
        </View>
    );
}

//estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        height: 350
    },
    boton: {
        marginTop: 20
    },
    sec30: {
        flex: 0.6,
        borderRadius: 25,
        top: 25,
        alignItems: 'center',
        textAlign: 'center',
        gap: 15,
        height: 400
    },
    img: {
        width: 200,
        height: 250,
        borderRadius: 30,
        top: 30
    },

});

export default Login;