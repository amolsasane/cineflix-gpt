import React from "react";
import { poster_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[10rem] mx-3 transform transition-transform duration-500 ease-in-out hover:scale-125">
      <img
        alt="Poster"
        src={poster_CDN_URL + posterPath}
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  );
};

export default MovieCard;
