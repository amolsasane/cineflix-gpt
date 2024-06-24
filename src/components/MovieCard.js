import React from "react";
import { poster_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[23rem] h-[13rem] mx-3">
      <img
        alt="Poster"
        src={poster_CDN_URL + posterPath}
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  );
};

export default MovieCard;
