import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, alert, StatusBar} from "react-native";
import { Botones, Link } from "../componentes/botones";
import  Subtitulo from "../componentes/subtitulos"
//import { Link } from "../componentes/link.js"
import {Input} from "../componentes/input"

const rutaimg = '../assets/login_ico.png'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar 
            backgroundColor={"red"}/>
            <View style={styles.image}>
                <Subtitulo texto="¡¡Que bueno verte por aca!!"/>
                <Image source={require(rutaimg)} style={styles.img}></Image>
            </View>
            <View style={styles.sec30}>
                <Input texto="Ingresar email" tipo="email" ico="account"></Input>
                <Input texto="Ingresar contraseña" tipo="numeric" ico="eye"> </Input>
                <Botones texto="Ingresar" onPres={() => navigation.navigate('TabNavs')}/>
                <Link texto="Recuperar Contraseña"></Link>
            </View>
        </View>
    );
}

//estilos
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    image:{
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    boton: {
        marginTop: 20
    },
    sec30: {
        flex:0.6,
        borderRadius: 25,
        top: 25,
        alignItems: 'center',
        textAlign: 'center',
        gap: 15
    },
    img: {
        width: 200,
        height: 250,
        borderRadius: 30,
        top: 30
    },
    
});

export default Login;