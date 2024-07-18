import React from "react";
import MovieCard from "./MovieCard";

const MovieCarousel = ({ title, movies }) => {
  return (
    <div>
      <h1 className="ml-12 text-white font-bold text-2xl rounded">{title}</h1>
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

export default MovieCarousel;
