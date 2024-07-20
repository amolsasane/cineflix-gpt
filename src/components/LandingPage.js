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
        className="text-white min-h-[90vh] bg-cover relative z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${bgImage})`,
        }}
      >
        <header className="flex flex-between justify-between bg-transparent items-center bg-gradient-to-b from-black w-full absolute">
          <img
            className="w-[12rem] brightness-100 contrast-150 ml-[10rem]"
            src={logo}
            alt="logo"
          />

          <button
            onClick={handleClick}
            className="bg-red-700 hover:contrast-100 contrast-150 px-4 py-2 rounded-md mt-10 text-white font-bold h-full content-center mr-[20rem]"
          >
            Sign Up
          </button>
        </header>
        <div className="justify-center text-center">
          <h1 className="text-5xl font-bold text-white text-center pb-5 pt-64">
            Unlimited movies, TV shows and more
          </h1>
          <h1 className="text-white text-2xl">
            Ready to explore?, hit the button below!
          </h1>
          <button
            onClick={handleScroll}
            className="text-white font-bold bg-red-700 hover:contrast-100 contrast-150 p-4 rounded-full mt-10 w-1/6 text-2xl"
          >
            Explore <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      <div className="h-2 bg-zinc-800"></div>
      <section ref={firstSection} className="bg-black h-[30rem] flex">
        <div className="w-1/2 flex-col justify-center content-center pl-32">
          <h1 className="font-bold text-5xl text-white mb-4">
            Enjoy on your TV
          </h1>
          <h1 className="text-2xl text-white">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Watch Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv-png"
            className="absolute"
          />
          <video
            autoPlay
            playsInline
            muted
            loop
            className="mt-[6.5rem] ml-[5.6rem] w-[80%]"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <div className="h-2 bg-zinc-800"></div>
      <section className="bg-black h-[30rem] flex">
        <div className="ml-20 w-1/3">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="mobile"
            className="absolute"
          />
          <div className="rounded-lg absolute w-[22rem] h-[6rem] mt-[20rem] ml-[9rem] bg-white">
            <div className="flex justify-around content-center p-2">
              <div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="poster"
                  className="w-14"
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
        <div className=" flex-col justify-start content-center relative ml-20 w-[45%]">
          <h1 className="font-bold text-5xl text-white mb-4">
            Download your shows to watch offline
          </h1>
          <h1 className="text-2xl text-white">
            Save your favourites easily and always have something to watch.
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Sign Up Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>
      <div className="h-2 bg-zinc-800"></div>
      <section className="bg-black h-[30rem] flex">
        <div className="w-1/2 flex-col justify-center content-center pl-32">
          <h1 className="font-bold text-5xl text-white mb-4">
            Watch everywhere
          </h1>
          <h1 className="text-2xl text-white">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Get Started Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt="tv-png"
            className="absolute"
          />
          <video
            autoPlay
            playsInline
            muted
            loop
            className="mt-[2rem] ml-[7rem] w-[70%]"
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <div className="h-2 bg-zinc-800"></div>
      <section className="bg-black h-[30rem] flex">
        <div className="ml-32 w-1/2">
          <img
            src="https://ezk8caoodod.exactdn.com/wp-content/uploads/2023/03/search-engine.png?strip=all&lossy=1&ssl=1"
            alt="ai-image"
            className="w-auto mt-20"
          />
        </div>
        <div className=" flex-col justify-start content-center relative w-auto mx-16">
          <h1 className="font-bold text-5xl text-white mb-4">
            AI for your assistance
          </h1>
          <h1 className="text-2xl text-white">
            Ask anything, and let AI be your ultimate movie Guru, guiding you
            through an endless universe of films and shows!
          </h1>
          <button
            onClick={handleClick}
            className="bg-red-700 text-2xl my-6 hover:contrast-100 shadow-2xl shadow-red-800 contrast-150 px-4 py-2 rounded-xl text-white font-bold"
          >
            Explore Now <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
