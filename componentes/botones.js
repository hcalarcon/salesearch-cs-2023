import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Botones (props)
{
    const {texto, onPres} = props
    return (
        <TouchableOpacity style={styles.boton} onPress={onPres}>
            <Text style={styles.text}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

export function Link(props){

    const {texto, OnPres} = props

    return (
        <View>
            <TouchableOpacity onPress={OnPres}>
                <Text style={styles.link}>
                    {texto}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
boton:{
    backgroundColor: 'white',
    paddingVertical: 10,
    margin: 10,
    width: '90%',
    alignSelf:'center',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1
},
text:{
    fontSize:22,
    color: 'black',
    fontWeight: '600'
},
link: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "gray"
}
});