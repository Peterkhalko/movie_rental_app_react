import axios from "../axios/axios-common";
const getAll = () => {
  return axios.get("/movies");
};
const getMovieCount = (data) => {
  const res = axios.get("/movies/count/movies/?genreName=" + data);
  return res;
};
const pfs = (data) => {
  const res = axios.post("/movies/pfs", data);
  return res;
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
  getMovieCount,
};
export default movieServices;
