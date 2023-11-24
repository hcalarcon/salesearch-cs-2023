import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet, View } from "react-native";

const Pickers = () => {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <View style={styles.container}>
      <SelectList
        boxStyles={styles.lista}
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        placeholder="seleccionar"
        searchPlaceholder="buscar"
        notFoundText="no se encontro"
        dropdownShown="false"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    borderColor: "red",
  },
  container: {
    paddingVertical: 5,
  },
});

export default Pickers;
