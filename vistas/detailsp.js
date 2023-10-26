import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import Constants from "expo-constants";
import Subtitulo from "../componentes/subtitulos"



const Detalles = ({navigation, route}) =>{
    const { producto } = route.params;
    //const {id, nombre, marca, precio, cantidad, ptovta, img, tipo} = route.params;
    const ruta = JSON.stringify(producto.img)
    
    return (
        <View style={estilos.container}>
            <Subtitulo texto="Detalles del producto"></Subtitulo>
            <Image source={{ uri : ruta}} style={estilos.img}></Image>
            {/* <Text>Producto: {nombre}</Text>
            <Text>Marca: {marca}</Text>
            <Text>Precio: ${precio} </Text>
            <Text>Presentación: {cantidad}</Text>
            <Text>Codigo del producto: C00{id}</Text> */}
            <Text>{producto.img}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems: 'center',
        paddingTop: 15
    },
    img:{
        height: 200,
        width: 200
    }
})
export default Detalles;