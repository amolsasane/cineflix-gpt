import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieTrailer = ({ id }) => {
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(id);

  return (
    <div className="pt-10 lg:pt-0">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?rel=0&autoplay=1&mute=1&loop=1&playlist=" +
          movieTrailer?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

MovieTrailer.propTypes = {
  id: PropTypes.number.isRequired, // Adjust type according to your use case
};

export default MovieTrailer;
