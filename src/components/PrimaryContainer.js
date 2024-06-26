import React from "react";
import MovieTrailer from "./MovieTrailer";
import MovieInfo from "./MovieInfo";
import { useSelector } from "react-redux";

const PrimaryContainer = () => {
  const movielist = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movielist) {
    return <div>Loading...</div>; // Add a loading state
  }

  if (movielist.length === 0) {
    return <div>No movies available</div>; // Handle empty movie list
  }

  const mainMovie = movielist[0];
  const { id, title, overview } = mainMovie;

  return (
    <div>
      <MovieInfo title={title} overview={overview} />
      <MovieTrailer id={id} />
    </div>
  );
};

export default PrimaryContainer;
