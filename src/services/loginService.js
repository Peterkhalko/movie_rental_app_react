import axios from "../axios-common";

const login = (data) => {
  return axios.post("/login", data);
};

export default login;
