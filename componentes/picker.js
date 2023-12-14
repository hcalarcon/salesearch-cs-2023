import React, { useState, useRef } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Pickers = (props) => {
  const { cambios, data } = props;

  const [isListOpen, setListOpen] = useState(false);

  const closeList = () => {
    setListOpen(false);
  };

  const toggleList = () => {
    setListOpen(!isListOpen);
  };

  const handleTouchOutside = (event) => {
    const viewRef = listRef.current;

    if (viewRef && !viewRef.contains(event.target)) {
      closeList();
    }
  };

  const listRef = useRef();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View ref={listRef}>
          <SelectList
            boxStyles={styles.lista}
            setSelected={(val) => cambios(val)}
            data={data}
            save="value"
            placeholder="seleccionar"
            searchPlaceholder="buscar"
            notFoundText="no se encontro"
            isOpen={isListOpen}
            onToggle={toggleList}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
