import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Principal from "./vistas/principal";
import Home from "./vistas/home";
import Login from "./vistas/login";
import Sigup from "./vistas/sinup";
import Detalles from "./vistas/detailsp";
import Newpublish from "./vistas/newpublish";
import Account from "./vistas/account";
import Recuperar from "./vistas/recuperar";
import Inicial from "./vistas/inicial";
import datosPersonales from "./vistas/datosPersonales";
import CambiarContra from "./vistas/CambiarContra";
import cambiarFotoPerfil from "./vistas/cambiarFotoPerfil";
import { primaryColor } from "./constans/constantes";

const Tabs = createMaterialBottomTabNavigator();

const TabNav = () => {
  return (
    <Tabs.Navigator
      activeColor="black"
      inactiveColor="#f0edf6"
      barStyle={{
        backgroundColor: "#EB5D57",
        height: 50,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="NuevaPubli"
        component={Newpublish}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="plus" color={color} size={30} />
          ),
        }}
      />

      <Tabs.Screen
        name="Cuenta"
        component={Account}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={30} />
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
      <Stack.Screen
        name="Inicial"
        options={{ headerShown: false }}
        component={Inicial}
      />
      <Stack.Screen
        name="Principal"
        options={{ headerShown: false }}
        component={Principal}
      />
      <Stack.Screen
        name="TabNavs"
        options={{ headerShown: false }}
        component={TabNav}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="Sigup"
        options={{ headerShown: false }}
        component={Sigup}
      />
      <Stack.Screen
        name="Detalles"
        options={{ headerShown: false }}
        component={Detalles}
      />
      <Stack.Screen
        name="Recuperar"
        options={{ headerShown: false }}
        component={Recuperar}
      />
      <Stack.Screen
        name="DatosPersonales"
        options={{
          headerShown: true,
          title: "Modificar datos personales",
          headerStyle: {
            backgroundColor: "#EB5D57",
          },
        }}
        component={datosPersonales}
      />
      <Stack.Screen
        name="CambiarContrasena"
        options={{
          headerShown: true,
          title: "Modificar contraseña",
          headerStyle: {
            backgroundColor: "#EB5D57",
          },
        }}
        component={CambiarContra}
      />
      <Stack.Screen
        name="CambiarFoto"
        options={{
          headerShown: true,
          title: "Foto de perfil",
          headerStyle: {
            backgroundColor: primaryColor,
          },
        }}
        component={cambiarFotoPerfil}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={primaryColor} style="light" />
      <StackNav />
    </NavigationContainer>
  );
}
