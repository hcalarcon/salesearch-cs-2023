import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tome from "./home";
import pogin from "./login";
import Ssigup from "./sinup";

const Tab = createBottomTabNavigator();

const Inicio = ({navigation}) => {
    return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="home" component={tome}/>
                    <Tab.Screen name="login" component={pogin}/>
                    <Tab.Screen name="sigup" component={Ssigup}/>
                    <Tab.Screen />
                </Tab.Navigator>
            </NavigationContainer>
        );
}

export default Inicio;