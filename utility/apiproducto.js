const ruta = "http:192.168.3.122:3000";
const apcategorias = `${ruta}/categoria`;
const apall = `${ruta}/all`;

//funcion para obtener las categorias desde el backend
export const getCategoria = async () => {
  try {
    const categorias = await fetch(apcategorias, {
      method: "GET",
    });
    return await categorias.json();
  } catch (er) {
    console.log(er);
  }
};

export const getAll = async (tabla) => {
  try {
    const all = await fetch(apall, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ tabla }),
    });
    return await all.json();
  } catch (er) {
    console.log("error get all", er);
  }
};
