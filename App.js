import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Principal from "./vistas/principal";
import Home from "./vistas/home";
import Login from "./vistas/login";
import Sigup from "./vistas/sinup";
import Detalles from "./vistas/detailsp";
import Newpublish from "./vistas/newpublish";
import Account from "./vistas/account";
import Recuperar from "./vistas/recuperar";

const Tabs = createMaterialBottomTabNavigator();


const TabNav = () => {
  return (
    <Tabs.Navigator 
    activeColor='black' 
    inactiveColor="#f0edf6"
    barStyle={{ 
      backgroundColor: '#F52C01', 
      height: 55
      }}>
     
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        
      />
      <Tabs.Screen
        name="NuevaPubli"
        component={Newpublish}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={30} />
          ),
        }}
      />

      <Tabs.Screen
        name="Cuenta"
        component={Account}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />

    </Tabs.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Principal" options={{ headerShown: false }} component={Principal} />
      <Stack.Screen name="TabNavs" options={{ headerShown: false }} component={TabNav} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Sigup" options={{ headerShown: false }} component={Sigup} />
      <Stack.Screen name="Detalles" options={{ headerShown: false }} component={Detalles}/>
      <Stack.Screen name="Recuperar" options={{ headerShown: false }} component={Recuperar}
      />
    </Stack.Navigator>
  );
};

export default function App() {


  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={"red"} />
      <StackNav />
    </NavigationContainer>
  );
}





