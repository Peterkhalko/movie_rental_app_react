import axios from "../axios-common";
const getAll = () => {
  return axios.get("/genres");
};
const get = (id) => {
  return axios.get(`/genres/${id}`);
};
const create = (data) => {
  return axios.post("/genres", data);
};
const update = (_id, data) => {
  return axios.put(`/genres/${_id}`, data);
};
const remove = (_id) => {
  return axios.delete(`/genres/${_id}`);
};

const genreServices = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default genreServices;
