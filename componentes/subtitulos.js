import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Subtitulos = (props) => {

    const {texto} = props
    return (
        <Text>
            <Text style={styles.titulo}>
                {texto}
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 20,
        color: "red",
        fontWeight: 'bold'
    }
});

export default Subtitulos;
