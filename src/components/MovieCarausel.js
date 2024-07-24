import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import MovieCard from "./MovieCard";

const MovieCarousel = ({ title, movies }) => {
  return (
    <div>
      <h1 className="ml-6 lg:ml-12 text-white font-bold text-md sm:text-lg md:text-xl lg:text-2xl rounded">
        {title}
      </h1>
      <div className="slider">
        <div className="slide flex mt-2 mb-14">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              id={movie.id}
            />
          ))}
          {movies?.map((movie) => (
            <MovieCard
              key={`duplicate-${movie.id}`}
              posterPath={movie.poster_path}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Define PropTypes
MovieCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieCarousel;
