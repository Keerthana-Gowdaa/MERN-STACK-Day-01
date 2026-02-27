import axios from "axios";

const api = axios.get({
  baseURL: "http://localhost:5000/api",
});

export default api;