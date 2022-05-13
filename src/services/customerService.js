import axios from "../axios/axios-common";
const getAll = () => {
  return axios.get("/customers");
};
const get = (id) => {
  return axios.get(`/customers/${id}`);
};
const create = (data, token) => {
  return axios.post("/customers", data, { headers: { "x-auth-token": token } });
};
const update = (id, data) => {
  return axios.put(`/customers/${id}`, data);
};
const remove = (id, token) => {
  return axios.delete(`/customers/${id}`, {
    headers: { "x-auth-token": token },
  });
};

const customerService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default customerService;
