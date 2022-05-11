import { Link } from "react-router-dom";
import heroLanding from "../images/nav-logo.gif";
import spiderman from "../videos/spider-man.mp4";
import wonderWomanAquaMan from "../videos/wonderWomanAquaMan.mp4";
function LandingPage() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    <span style={{ fontFamily: "Niconne" }}>
                      {" "}
                      Welcome to the Movie Rentals
                    </span>
                  </span>
                </h1>
                <p className="mt-3  text-gray-500 text-lg ">
                  A new home of thousands of movies, including all the latest
                  blockbusters
                </p>
                <span className="mt-10 flex flex-row space-x-10">
                  <button
                    type="button"
                    class=" drop-shadow-2xl inline-block  px-6 py-2.5 bg-purple-600 text-white  text-lg leading-tight uppercase rounded-full  hover:bg-purple-700 hover:shadow-lg hover:text-white focus:bg-purple-700  active:bg-purple-800  transition duration-150 ease-in-out"
                  >
                    <Link to="/app/login"> Login</Link>
                  </button>
                  <button
                    type="button"
                    class=" drop-shadow-2xl inline-block  px-6 py-2.5 bg-purple-600 text-white  text-lg leading-tight uppercase rounded-full  hover:bg-purple-700 hover:shadow-lg hover:text-white focus:bg-purple-700  active:bg-purple-800  transition duration-150 ease-in-out"
                  >
                    <Link to="/app/login"> SingUp</Link>
                  </button>
                </span>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={heroLanding}
            alt=""
          />
        </div>
      </div>

      <div className="container-fluid flex flex-row p-8 mt-10 ">
        <span className="" data-aos="fade-down-right">
          <video
            src={spiderman}
            autoPlay
            loop
            muted
            className="flex-1 object-cover rounded-full"
          >
            Your browser does not support the video tag.
          </video>
        </span>

        <span
          className="mt-3  text-gray-500 text-lg text-center self-center "
          data-aos="fade-down-left"
        >
          <p className="self-center  ">
            Now you can rent and watch <br /> right from the comfort of you home
            — Personalization,Discover more of what you love —
          </p>
        </span>
      </div>
      {/* swiper */}
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      {/* swiper */}
    </div>
  );
}
export default LandingPage;
