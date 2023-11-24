//endpoint del api
const ruta = "http:192.168.3.122:3000";
const api = `${ruta}/user/login`;
const publi = `${ruta}/publi`;
const apisu = `${ruta}/user/usersp`;
const update = `${ruta}/user/update`;

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

  const response = await fetch(update, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, email, nombre, apellido, dni, userId }),
  });
  return await response.json();
};

export const getPubli = async () => {
  const response = await fetch(publi);
  return await response.json();
};

export const getImageProfile = async () => {};
