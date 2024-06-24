import React from "react";
import MovieCard from "./MovieCard";

const MovieCarausel = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movies) => (
            <MovieCard posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCarausel;
