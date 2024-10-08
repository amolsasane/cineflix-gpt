import React from "react";
import PropTypes from "prop-types";
import { poster_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  if (!posterPath) return null;

  return (
    <Link to={`/browse/watch/${id}`}>
      <div className="w-[6rem] sm:w-[8rem] md:w-[9rem] lg:w-[10rem] mx-2 transform transition-transform duration-500 ease-in-out hover:scale-90">
        <img
          alt="Poster"
          src={poster_CDN_URL + posterPath}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
