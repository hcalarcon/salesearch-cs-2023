import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import Constants from "expo-constants"
import { consulta } from "../api";


const Recuperar = ({navigation}) => {

    const [user, setUser] = useState ([]);

    useEffect( () => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await consulta()
        setUser(data);
         
    }

    // async function fetchData(){
    //     const response = await fetch ("http://127.0.0.1:8080/users/2");
    //     const data = await response.json();
    //     setUser(data);
    // }

    return (
        <View style={styles.container}>
            <Text> Config cuenta </Text>
            <Text>users: {JSON.stringify(user)}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})
export default Recuperar;