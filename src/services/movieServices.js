import axios from "../axios-common";
const getAll = () => {
  return axios.get("/movies");
};
const pfs = (data) => {
  return axios.post("/movies/pfs", { skip: data.skip });
};
const get = (id) => {
  return axios.get(`/movies/${id}`);
};
const create = (data, token) => {
  return axios.post(
    "/movies",
    {
      title: data.title,
      genreId: data.genreId,
      dailyRentalRate: data.dailyRentalRate,
      numberInStocks: data.numberInStocks,
      liked: data.liked,
    },
    { headers: { "x-auth-token": token } }
  );
};
const update = (id, data, token) => {
  return axios.put(`/movies/${id}`, data, {
    headers: { "x-auth-token": token },
  });
};
const remove = (_id, token) => {
  return axios.delete(`/movies/${_id}`, { headers: { "x-auth-token": token } });
};

const movieServices = {
  getAll,
  get,
  create,
  update,
  remove,
  pfs,
};
export default movieServices;
