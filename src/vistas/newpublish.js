import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Subtitulos from "../componentes/subtitulos";
import { Input } from "../componentes/input";
import Picker from "../componentes/picker";
import { getCategoria, getAll } from "../src/utility/apiproducto";

const Newpublish = ({ navigator }) => {
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [categorias, setCategorias] = useState([
    { catId: 1, nombre: "error al conectar" },
  ]);
  const [ptovtas, setPtoVtas] = useState([]);
  const [tipoOfertas, setTipoOfertas] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [ptovta, setPtoVta] = useState("");
  const [tipoOferta, setTipoOferta] = useState("");

  useEffect(() => {
    obtenerDatos(); //obtenego la lista de categorias
  }, []);

  const obtenerDatos = () => {
    try {
      getTabla(setTipoOfertas, "tipo_ofertas");
      getTabla(setPtoVtas, "punto_de_venta");
      fetchCategoria();
    } catch {}
  };

  const fetchCategoria = async () => {
    const categorias = await getCategoria();
    setCategorias(categorias); //lo cargo en el estado
  };

  const getTabla = async (set, tabla) => {
    const all = await getAll(tabla);
    set(all);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Subtitulos
          texto="¿Encontraste una ofertas? ¡¡publicala!!"
          font={20}
        ></Subtitulos>
        <Input
          texto="Nombre del producto"
          tipo="text"
          ico=""
          cambios={setProducto}
        ></Input>

        <Input
          texto="Precio"
          tipo="decimal"
          ico=""
          type="none"
          cambios={setPrecio}
        ></Input>
        <Picker
          //mapeo el array data, para construir uno nuevo con los datos id y key
          data={categorias.map((cat) => ({
            key: cat.catId,
            value: cat.nombre,
          }))}
          cambios={setCategoria}
        />

        <Picker
          data={tipoOfertas.map((to) => ({
            key: to.id,
            value: to.tipo,
          }))}
          cambios={setTipoOferta}
        />

        <Picker
          data={ptovtas.map((pv) => ({
            key: pv.id,
            value: pv.nombre,
          }))}
          cambios={setPtoVta}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    padding: 5,
    gap: 5,
  },
});

export default Newpublish;
