import axios from "../axios-common";
const getAll = () => {
  return axios.get("/customers");
};
const get = (id) => {
  return axios.get(`/customers/${id}`);
};
const create = (data) => {
  return axios.post("/customers", data);
};
const update = (id, data, token) => {
  return axios.put(`/customers/${id}`, data);
};
const remove = (id, token) => {
  return axios.delete(`/customers/${id}`);
};

const customerService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default customerService;
