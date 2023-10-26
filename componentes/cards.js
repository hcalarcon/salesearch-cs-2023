import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';


export function Cards(props) {

    const { titulo, subtitulo, ptovta, rutaimg } = props

    return (
        <Card style={{ paddingHorizontal: 10 }}>
            <Card.Title title={titulo} subtitle={"Precio $" + subtitulo} />
            <Card.Content>
                <Text variant="bodyMedium">Punto de venta: {ptovta}</Text>
            </Card.Content>
            {/* <Card.Cover source={{uri: {rutaimg}}} /> */}
            <Card.Actions>
                <Button>Detalles</Button>
            </Card.Actions>
        </Card>
    );
}

export function Tarjetas(props) {
    const { producto, precio, desc, ptovta, tipo, img, onPres } = props

    return (
        <TouchableOpacity onPress={onPres}>
        <View style={styles.card}>
            
                <View style={styles.secimg}>
                    <Image source={{ uri: img }} style={styles.image}></Image>
                </View>

                <View style={styles.desc}>
                    <Text>{producto}</Text>
                    <Text>{desc}</Text>
                    <Text>Precio: ${precio}</Text>
                    <Text>Punto de venta: {ptovta}</Text>
                </View>

                <View style={styles.tipo}>
                    <Text style={styles.text}>{tipo}</Text>
                </View>
            
        </View></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#F5675A',
        borderRadius: 25,
        width: '98%',
        shadowColor: 'gray',
        shadowOpacity: 1,
        paddingHorizontal: 10
    },
    tipo: {
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        width: 50,
        height: 25,
        left: 0,
        bottom: 2
    },
    text: {
        textAlign: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    desc: {
        width: 230
    },
    secimg: {
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})