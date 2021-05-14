import axios from "axios";

const api = axios.create({
  // Mac
  baseURL: "http://192.168.15.6:3333",
  // Windows
  //baseURL: "http://192.168.15.10:3334",
});

export default api;
