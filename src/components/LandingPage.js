import React, { useRef } from "react";
import { bgImage } from "../utils/constants";
import logo from "../utils/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import download from "../utils/images/download.gif";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const firstSection = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleScroll = () => {
    if (firstSection.current) {
      firstSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        className="text-white h-[40rem] lg:min-h-[30rem] bg-cover relative z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${bgImage})`,
        }}
      >
        <header className="flex justify-between bg-transparent items-center bg-gradient-to-b from-black w-full absolute">
          <img
            className="w-[12rem] brightness-100 contrast-150 lg:ml-[10rem] p-4 lg:p-0"
            src={logo}
            alt="logo"
          />

          <button
            onClick={handleClick}
            className="bg-red-700 hover:contrast-100 contrast-150 px-2 lg:px-4 py-1 lg:py-2 rounded-md lg:mt-10 mt-6 text-white font-bold h-full content-center lg:mr-[20rem] mr-4"
          >
            Sign Up
          </button>
        </header>
        <div className="justify-center text-center pt-44 lg:pt-64">
          <h1 className="lg:text-5xl text-4xl font-bold text-white text-center pb-5 lg:mx-0 mx-4">
            Unlimited movies, TV shows and more
          </h1>
          <h1 className="text-white lg:text-2xl text-xl">
            Ready to explore?, hit the button below!
          </h1>
          <button
            onClick={handleScroll}
            className="text-white font-bold bg-red-700 hover:contrast-100 contrast-150 lg:p-4 p-2 rounded-full mt-10 lg:w-1/6 w-[7rem] lg:text-2xl text-lg"
          >
            Explore <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      <div className="h-2 bg-zinc-800"></div>
      <section
        ref={firstSection}
        className="bg-black lg:h-[30rem] h-[40rem] lg:flex"
      >
        <div className="lg:w-1/2 flex-col justify-center content-center text-center lg:text-start lg:pl-32 pt-4 lg:pt-0">
          <h1 className="font-bold text-4xl lg:text-5xl text-white mb-4">
            Enjoy on your TV
          </h1>
          <h1 className="text-lg lg:text-2xl lg:px-0 px-4 text-white">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-lg lg:text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Watch Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex lg:justify-normal justify-center lg:w-1/2">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv"
            className="absolute lg:w-[40rem] w-[30rem]"
          />
          <video
            autoPlay
            playsInline
            muted
            loop
            className="lg:ml-[5rem] lg:w-[30rem] w-[30rem]"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <div className="h-2 bg-zinc-800"></div>

      <section className="bg-black lg:h-[30rem] h-[40rem] lg:flex">
        <div className="hidden flex lg:inline-block lg:flex-row lg:ml-20 w-[35rem] lg:[40rem] justify-center lg:pr-[20rem]">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="mobile"
            className="absolute w-auto h-auto"
          />
          <div
            className="rounded-lg absolute w-[18rem] lg:w-[20rem] h-[5rem]
       lg:h-[6rem] mt-[18rem] lg:mt-[20rem] bg-white lg:ml-[10rem]"
          >
            <div className="flex justify-around content-center p-2">
              <div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="poster"
                  className="w-12 lg:w-14"
                />
              </div>
              <div className="content-center">
                <div>
                  <h1 className="font-bold">Stranger Things</h1>
                  <h3 className="text-blue-600 font-bold">Downloading...</h3>
                </div>
              </div>
              <div className="text-black text-3xl content-center">
                <img src={download} className="bg-transparent" alt="download" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex-col justify-center content-center text-center lg:text-start pt-4 lg:pt-0 lg:mx-36 z-10">
          <h1 className="font-bold text-4xl lg:text-5xl text-white mb-4">
            Download your shows to watch offline
          </h1>
          <h1 className="text-lg lg:text-2xl lg:px-0 px-4 text-white">
            Save your favourites easily and always have something to watch.
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-lg lg:text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Sign Up Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="lg:hidden lg:ml-20 lg:w-1/3 flex justify-center">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="mobile"
            className="absolute lg:w-auto w-[35rem]"
          />
          <div
            className="rounded-lg absolute w-[18rem] lg:w-[22rem] h-[5rem]
       lg:h-[6rem] mt-[18rem] lg:mt-[20rem] bg-white"
          >
            <div className="flex justify-around content-center p-2">
              <div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="poster"
                  className="w-12 lg:w-14"
                />
              </div>
              <div className="content-center">
                <div>
                  <h1 className="font-bold">Stranger Things</h1>
                  <h3 className="text-blue-600 font-bold">Downloading...</h3>
                </div>
              </div>
              <div className="text-black text-3xl content-center">
                <img src={download} className="bg-transparent" alt="download" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-2 bg-zinc-800"></div>

      <section className="bg-black lg:h-[30rem] h-[40rem] lg:flex">
        <div className="lg:w-1/2 flex-col justify-center content-center text-center lg:text-start lg:pl-32 pt-4 lg:pt-0">
          <h1 className="font-bold text-4xl lg:text-5xl text-white mb-4">
            Watch everywhere
          </h1>
          <h1 className="text-lg lg:text-2xl lg:px-0 px-4 text-white">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-lg lg:text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Get Started Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="flex justify-center w-[1/2] lg:ml-[5rem] lg:mt-[2rem]">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="tv"
            className="absolute w-[35rem]"
          />
          <video
            autoPlay
            playsInline
            muted
            loop
            className="w-[20rem] pt-7 lg:-mt-[14rem]"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <div className="h-2 bg-zinc-800"></div>

      <section className="bg-black lg:h-[30rem] h-[32rem] lg:flex">
        <div className="hidden lg:inline-block flex lg:justify-normal justify-center lg:w-1/2 mb-2 lg:mt-[3rem] w-[30rem] lg:ml-20 lg:pr-10">
          <img
            src="https://ezk8caoodod.exactdn.com/wp-content/uploads/2023/03/search-engine.png?strip=all&lossy=1&ssl=1"
            alt="ai"
            className=""
          />
        </div>

        <div className="lg:w-1/2 flex-col justify-center content-center text-center lg:text-start lg:pr-32 pt-4 lg:pt-0">
          <h1 className="font-bold text-4xl lg:text-5xl text-white mb-4">
            AI for your assistance
          </h1>
          <h1 className="text-lg lg:text-2xl lg:px-0 px-4 text-white">
            Ask anything, and let AI be your ultimate movie Guru, guiding you
            through an endless universe of films and shows!
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-lg lg:text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Explore Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="lg:hidden flex lg:justify-normal justify-center lg:w-1/2 mb-2">
          <img
            src="https://ezk8caoodod.exactdn.com/wp-content/uploads/2023/03/search-engine.png?strip=all&lossy=1&ssl=1"
            alt="ai"
            className="lg:mt-[3rem] w-[25rem] lg:w-[30rem]"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
