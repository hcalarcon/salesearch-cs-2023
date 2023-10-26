import React from "react";
import { Text } from "react-native";


const Subtitulos = (props) => {

    const { texto, font } = props
    return (
        <Text>
            <Text style={{
                fontSize: font,
                color: "red",
                fontWeight: 'bold'
            }}>
                {texto}
            </Text>
        </Text>
    )
}

export function messageErr(props) {
    const { texto } = props

    return (
        <Text>
            {texto}
        </Text>
    )
}


export default Subtitulos;
