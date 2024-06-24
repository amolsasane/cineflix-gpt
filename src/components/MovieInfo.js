import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const MovieInfo = ({ title, overview }) => {
  return (
    <div className="w-1/3 ml-10 mt-[18%] absolute font-bold">
      <h1 className="font-bold text-5xl m-3 text-white text-shadow">{title}</h1>
      <p className="text-lg text-justify m-3 text-white">{overview}</p>
      <button className="bg-white w-32 p-3 mx-3 my-4 font-bold rounded text-lg">
        <FontAwesomeIcon icon={faPlay} className="mr-3 text-[1.5rem]" />
        Play
      </button>
      <button className="bg-gray-500 w-[10rem] p-3 my-4 font-bold text-white rounded text-lg bg-opacity-70">
        <FontAwesomeIcon icon={faCircleInfo} className="mr-2 text-[1.5rem]" />
        More Info
      </button>
    </div>
  );
};

export default MovieInfo;
