import axios from "axios";
const instance = axios.create({
  baseURL: "https://swapi.dev/api/planets/?page=1",
});

export default instance;
