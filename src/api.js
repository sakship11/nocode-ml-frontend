import axios from "axios";

const API = axios.create({
  baseURL: "https://nocode-ml-backend.onrender.com/",
});

export default API;
