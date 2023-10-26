import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
import Constants from "expo-constants"

const Newpublish = ({navigator}) => {

    return (
        <View style={styles.container}>
            
            <ScrollView>
                <Text>Nueva Publicación</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight
    }
})

export default Newpublish;