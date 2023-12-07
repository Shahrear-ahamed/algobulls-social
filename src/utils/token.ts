import { jwtDecode } from "jwt-decode";

const getToken = () => {
  return localStorage.getItem("token");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setToken = (token: any) => {
  localStorage.setItem("token", token);
};

const removeToken = () => {
  localStorage.removeItem("token");
};

const decodedAuthToken = () => {
  const token = getToken();
  if (token && token !== "undefined" && token !== "null") {
    const data = jwtDecode(token);
    return data;
  }

  return null;
};

export { getToken, setToken, removeToken, decodedAuthToken };
