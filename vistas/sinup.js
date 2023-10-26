import React from "react";
import { View, StyleSheet, ScrollView, Image} from "react-native";
import { Botones, Link } from '../componentes/botones';
import { Input } from "../componentes/input"
import  Subtitulo from "../componentes/subtitulos"

const rutaimg="../assets/singup.png"

const Sigup = ({navigation}) => {
    return (
        <View style={estilo.principal}>
            <ScrollView>
                <View style={estilo.sec1}>
                    <Image source={require(rutaimg)} style={estilo.img}></Image>
                    <Subtitulo texto="¿Vamos a ahorrar?"/>
                    <Input texto="Nombre de usuario" tipo="email" ico="account"></Input>
                    <Input texto="Ingresar email" tipo="email" ico="mail"></Input>
                    <Input texto="contraseña" tipo="numeric" ico="eye"></Input>
                    <Input texto="confirmar contraseña" tipo="numeric" ico="eye"></Input>
                    
                </View>
                <View style={estilo.sec2}>
                    <Botones texto="Crear cuenta" onPres={() => navigation.navigate('TabNavs')} />
                    <Link texto="¿ya tenes cuenta? inicia sesión acá" OnPres={() => navigation.navigate('Login')}></Link>
                </View>
            </ScrollView>
        </View>
    );
}

const estilo = StyleSheet.create({
    principal: {
        flex: 1,
        backgroundColor: "white"
    },
    sec1: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 600
    },
    sec2: {
        flex: 0.3,
        alignItems: 'center',
        gap: 10
    },
    img: {
        width: 250,
        height: 250,
        borderRadius: 25
    }
})

export default Sigup;