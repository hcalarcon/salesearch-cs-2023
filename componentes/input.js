import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { TextInput } from "react-native-paper";


export function Input (props){

    const {texto, tipo, place, ico, cambios} = props
    return (
        <View>
            <TextInput
                label={texto}
                style={styles.textinput}
                inputMode={tipo}
                textColor="black"
                activeOutlineColor="red"
                secureTextEntry
                mode="outlined"
                onChangeText={cambios}
                right={<TextInput.Icon icon={ico} />}
            >
            </TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    textinput:{
        width: 350,
        fontSize: 15,
    },
    texto:{
        marginTop: 10
    }
})

