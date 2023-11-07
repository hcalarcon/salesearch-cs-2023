//endpoint del api
const api = "http:192.168.3.122:3000/login";
const publi = "http:192.168.3.122:3000/publi";
const apisu = "http:192.168.3.122:3000/usersp";

//funcion para loguear usuario
export const LogCheck = async (email, password) => {
  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};

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

export const getPubli = async () => {
  const response = await fetch(publi);
  return await response.json();
};
