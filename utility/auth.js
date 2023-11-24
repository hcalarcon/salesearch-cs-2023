import storage from "../utility/storage";

const tokenExist = async () => {
  try {
    const token = await storage.load({ key: "token" });
    return !!token;
  } catch {
    return false;
  }
};

export default tokenExist;
