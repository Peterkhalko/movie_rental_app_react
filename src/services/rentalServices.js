import axios from "../axios-common";
const getAll = () => {
  return axios.get("/rentals");
};
const get = (id) => {
  return axios.get(`/rentals/${id}`);
};
const create = (data) => {
  return axios.post("/rentals", {
    customer: data.customerId,
    movie: data.movieId,
  });
};
const update = (_id) => {
  return axios.patch(`/rentals/${_id}`);
};
const remove = (_id) => {
  return axios.delete(`/rentals/${_id}`);
};

const rentalServices = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default rentalServices;
