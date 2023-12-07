import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === "development"
      ? import.meta.env.VITE_BACKEND_URL
      : import.meta.env.VITE_LIVE_BACKEND_URL,
});

export default instance;
