import clip from "../videos/hero.mp4";
import { getMovies } from "../services/fakeMovieService";
import { useState } from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  const [movie] = useState(getMovies());
  return (
    <div className="h-min flex flex-col landing-container overflow-hidden">
      <video autoPlay loop muted className="opacity-95">
        <source src={clip} type="video/mp4" />
      </video>
      <div class="rounded-lg  text-center  landing-hero">
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
          Welcome to Movi Rental
        </h2>
        <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-md bg-blue-500 shadow">
            <Link to="/app" class="text-gray-200 font-bold py-2 px-6">
              Start Exploring
            </Link>
          </div>
        </div>
      </div>
      <h2 class=" mb-5 text-3xl leading-9 font-bold tracking-tight sm:text-4xl sm:leading-10 text-center">
        Top Trending Movies{" "}
      </h2>
      <div className="cards grid grid-cols-2 h-52">
        <div className="col1" data-aos="fade-right"></div>
        <div
          className="col2 flex flex-col text-center justify-center  font-bold py-2 px-6"
          data-aos="fade-left"
        >
          <span>Name : {movie[0].title}</span>
          <span>Daily Rental Rate : {movie[0].dailyRentalRate}</span>
          <span>Number in Stocks : {movie[0].numberInStock}</span>
          <span></span>
        </div>
      </div>
      <div className="cards grid grid-cols-2 h-52">
        <div
          className="col2 flex flex-col text-center justify-center  font-bold py-2 px-6"
          data-aos="fade-left"
        >
          <span>Name : {movie[0].title}</span>
          <span>Daily Rental Rate : {movie[0].dailyRentalRate}</span>
          <span>Number in Stocks : {movie[0].numberInStock}</span>
          <span></span>
        </div>
        <div className="col1" data-aos="fade-right"></div>
      </div>
      <div className="cards grid grid-cols-2 h-52">
        <div className="col1" data-aos="fade-right"></div>
        <div
          className="col2 flex flex-col text-center justify-center  font-bold py-2 px-6"
          data-aos="fade-left"
        >
          <span>Name : {movie[0].title}</span>
          <span>Daily Rental Rate : {movie[0].dailyRentalRate}</span>
          <span>Number in Stocks : {movie[0].numberInStock}</span>
          <span></span>
        </div>
      </div>
      <div className="cards grid grid-cols-2 h-52">
        <div
          className="col2 flex flex-col text-center justify-center  font-bold py-2 px-6"
          data-aos="fade-left"
        >
          <span>Name : {movie[0].title}</span>
          <span>Daily Rental Rate : {movie[0].dailyRentalRate}</span>
          <span>Number in Stocks : {movie[0].numberInStock}</span>
          <span></span>
        </div>
        <div className="col1" data-aos="fade-right"></div>
      </div>
    </div>
  );
}
export default LandingPage;
