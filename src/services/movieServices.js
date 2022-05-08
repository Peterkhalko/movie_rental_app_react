import axios from "../axios-common";
const getAll = () => {
  return axios.get("/movies");
};
const get = (id) => {
  return axios.get(`/movies/${id}`);
};
const create = (data) => {
  return axios.post("/movies", {
    title: data.title,
    genreId: data.genreId,
    dailyRentalRate: data.dailyRentalRate,
    numberInStocks: data.numberInStocks,
  });
};
const update = (id, data, token) => {
  return axios.put(`/movies/${id}`, data);
};
const remove = (_id) => {
  return axios.delete(`/movies/${_id}`);
};

const movieServices = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default movieServices;
