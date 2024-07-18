import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MovieInfo = ({ title, overview, id }) => {
  const handleScrollToMore = () => {
    // Scroll the window down by a certain amount
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="w-1/3 ml-10 mt-[11%] absolute font-bold z-10">
      <h1 className="font-bold text-5xl m-3 text-white">{title}</h1>
      <p className="text-lg text-justify m-3 text-white">{overview}</p>
      <Link to={`/browse/watch/${id}`}>
        <button className="bg-white w-32 p-3 mx-3 my-4 font-bold rounded text-lg">
          <FontAwesomeIcon icon={faPlay} className="mr-3 text-[1.5rem]" />
          Play
        </button>
      </Link>
      <button
        className="bg-zinc-600 w-[10rem] p-3 my-4 font-bold text-white rounded text-lg bg-opacity-70"
        onClick={handleScrollToMore}
      >
        See More
        <FontAwesomeIcon icon={faAngleDown} className="pl-2 text-[1.5rem]" />
      </button>
    </div>
  );
};

export default MovieInfo;
