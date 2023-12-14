import { rutaApi } from "../constans/constantes";

//endpoint del api

const api = `${rutaApi}/user/login`;
const publi = `${rutaApi}/publi`;
const apisu = `${rutaApi}/user/usersp`;
const update = `${rutaApi}/user/update`;
const profileimg = `${rutaApi}/profileimg`;
const imageUpdates = `${rutaApi}/user/updateImage`;

//funcion para loguear usuario
export const LogCheck = async (email, password) => {
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  } catch (err) {
    console.error("error al conectar con la base de datos:", err.message);
  }
};

//funcion para crear un usaurio en la base de datos
export const createUser = async (username, email, password) => {
  const response = await fetch(apisu, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  return await response.json();
};

//funcion para actualizar un usaurio en la base de datos
export const updateUser = async (props) => {
  const { username, userId, nombre, apellido, email, dni } = props;

  try {
    const response = await fetch(update, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, email, nombre, apellido, dni, userId }),
    });
    return await response.json();
  } catch (er) {
    console.error(er);
  }
};

export const updateImage = async (imagen, userId) => {
  try {
    const response = await fetch(imageUpdates, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ img: imagen, userId }),
    });
    return await response.json();
  } catch (er) {
    console.error("Erro al actualizar la imagen", er);
  }
};

export const getPubli = async () => {
  const response = await fetch(publi);
  return await response.json();
};

export const getImageProfile = async () => {
  const response = await fetch(profileimg);
  return await response.json();
};
