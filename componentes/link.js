import React from "react";
import { TouchableOpacity, View } from "react-native";



export function Link(props){

    const {texto, OnPres} = props

    return (
        <View>
            <TouchableOpacity onPress={OnPres}>
                {texto}
            </TouchableOpacity>
        </View>
    );
}