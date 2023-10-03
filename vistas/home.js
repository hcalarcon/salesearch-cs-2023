import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Input } from "../componentes/input";
import { Searchbar } from 'react-native-paper';
import Barra from "../componentes/barra";
import { ToggleButton } from 'react-native-paper';


const Home = ({ navigation }) => {

    const [value, setValue] = React.useState('left');

    return (
        <View style={estilos.container}>
            <View style={estilos.superior}>
                <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
                    <ToggleButton icon="filter" value="left" />
                    <ToggleButton icon="magnify" value="right" />
                    <ToggleButton icon="order-bool-ascending" value="center" />
                </ToggleButton.Row>
                <Searchbar
                    placeholder="Buscar"
                />
                
            </View>

            <View>
                <FlatList>
                    
                </FlatList>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: 40,
            paddingHorizontal: 10

        },
        superior: {
            flex: 0.2,
            gap: 5,

        }
    }
)

export default Home;