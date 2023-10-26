import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import { ToggleButton } from 'react-native-paper';
import { Tarjetas } from "../componentes/cards";
import Constants from "expo-constants"

const Home = ({ navigation }) => {

    const [value, setValue] = React.useState('left');
    const Data = [
        {
            id: 1,
            nombre: "Queso",
            marca: "noal",
            precio: "1890",
            cantidad: "kg",
            ptovta: "la anonima suc 2",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "2x1"
        },
        {
            id: 2,
            nombre: "Fideo",
            marca: "Matarazzo",
            precio: "400",
            cantidad: "500gr",
            ptovta: "super todo",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "2x1"
        },
        {
            id: 3,
            nombre: "Queso",
            marca: "noal",
            precio: "1890",
            cantidad: "kg",
            ptovta: "la anonima suc 2",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "30%"

        },
        {
            id: 4,
            nombre: "Fideo",
            marca: "Matarazzo",
            precio: "400",
            cantidad: "500gr",
            ptovta: "super todo",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "3x2"
        },
        {
            id: 5,
            nombre: "Queso",
            marca: "noal",
            precio: "1890",
            cantidad: "kg",
            ptovta: "la anonima suc 2",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "2x1"
        },
        {
            id: 6,
            nombre: "Fideo",
            marca: "Matarazzo",
            precio: "400",
            cantidad: "500gr",
            ptovta: "super todo",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "2x1"
        },
        {
            id: 7,
            nombre: "Queso",
            marca: "noal",
            precio: "1890",
            cantidad: "kg",
            ptovta: "la anonima suc 2",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "2x1"
        },
        {
            id: 8,
            nombre: "Fideo",
            marca: "Matarazzo",
            precio: "400",
            cantidad: "500gr",
            ptovta: "super todo",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "2x1"
        },
        {
            id: 9,
            nombre: "Queso",
            marca: "noal",
            precio: "1890",
            cantidad: "kg",
            ptovta: "la anonima suc 2",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "30%"

        },
        {
            id: 10,
            nombre: "Fideo",
            marca: "Matarazzo",
            precio: "400",
            cantidad: "500gr",
            ptovta: "super todo",
            img: "https://reactnative.dev/img/tiny_logo.png",
            tipo: "3x2"
        },
        {
            id: 11,
            nombre: "Queso",
            marca: "noal",
            precio: "1890",
            cantidad: "kg",
            ptovta: "la anonima suc 2",
            img: 'https://reactnative.dev/img/tiny_logo.png',
            tipo: "2x1"
        },
        {
            id: 12,
            nombre: "Fideo",
            marca: "Matarazzo",
            precio: "400",
            cantidad: "500gr",
            ptovta: "super todo",
            img: '../assets/ico.png',
            tipo: "2x1"
        }

    ]

    return (
        <View style={estilos.container}>
            <View style={estilos.superior}>
                <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
                    <ToggleButton icon="filter" value="left"/>
                    <ToggleButton icon="magnify" value="right" />
                    <ToggleButton icon="order-bool-ascending" value="center" />
                </ToggleButton.Row>
                <Searchbar
                    placeholder="Buscar"
                />
                <FlatList style={{padding:3}}
                    data={Data}
                    renderItem={
                        ({ item }) => <Tarjetas 
                        producto={item.nombre} 
                        tipo={item.tipo} 
                        img={item.img}
                        precio={item.precio}
                        desc={item.marca}
                        ptovta={item.ptovta}
                        onPres={() => navigation.navigate('Detalles',{producto : item})}
                        /> 
                    }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10 }} />
                      )}
                    ListHeaderComponent={<Text></Text>}
                >
                </FlatList>

            </View>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Constants.statusBarHeight,
            
        },
        superior: {
            flex: 1,
            paddingBottom:10
        },
        flat: {
            
        },
        flatti:{
            padding: 5
        }
    }
)

export default Home;