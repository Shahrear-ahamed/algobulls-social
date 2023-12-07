import jwtDecode from "jwt-decode";

export const decodedToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};
