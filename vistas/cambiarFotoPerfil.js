import { getImageProfile, updateImage } from "../utility/api";
import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Botones } from "../componentes/botones";
import { rutaImage } from "../constans/constantes";
import storage from "../utility/storage";

export default FotoPerfil = ({ navigation, route }) => {
  const { usuario } = route.params;
  const imgActual = usuario.img;
  const [imagenes, setImagenes] = useState([]);
  const [imgElegida, setImgElegida] = useState(usuario.img);

  useEffect(() => {
    const obtenerimagenes = async () => {
      try {
        const image = await getImageProfile();
        setImagenes(image.profileImg);
      } catch (er) {}
    };

    obtenerimagenes();
  }, []);

  const handleImagePress = (selectedImageFileName) => {
    setImgElegida(selectedImageFileName);
  };

  const handleGuardar = async (imagensel, id) => {
    if (imagensel === imgActual) {
      console.log("elegir otra");
    } else {
      const respuesta = await updateImage(imagensel, id);

      // Modificar solo el campo 'img' en los datos del usuario
      const usuarioActualizado = { ...usuario, img: imagensel };
      try {
        // Guardar los datos actualizados en el almacenamiento
        await storage.save({ key: "usuario", data: usuarioActualizado });
        // Puedes devolver los datos actualizados a la vista anterior si es necesario
      } catch (error) {
        console.log("Error al guardar los datos actualizados:", error);
      }

      if (respuesta.success) {
        usuario.img = imagensel;
        navigation.goBack();
      } else console.log("error al conectar");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={{ uri: `${rutaImage}/${imgElegida}` }}
          style={styles.imgsel}
        />
      </View>
      <View style={styles.imagenes}>
        <FlatList
          data={imagenes}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleImagePress(item)}>
              <Image
                source={{
                  uri: `${rutaImage}/${item}`,
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
      </View>
      <View style={styles.botones}>
        <Botones
          texto="Guardar Cambios"
          onPres={() => handleGuardar(imgElegida, usuario.userId)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    flex: 0.3,
    justifyContent: "center",
  },
  botones: {
    flex: 0.1,
  },
  img: {
    width: 110,
    height: 110,
    margin: 5,
    borderColor: "red",
    borderWidth: 1,
  },
  imgsel: {
    width: 150,
    height: 150,
    margin: 2,
    borderColor: "red",
    borderWidth: 1,
    alignSelf: "center",
  },
  imagenes: {
    flex: 0.6,
    alignItems: "center",
  },
});
