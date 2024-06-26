import React from "react";
import MovieCarausel from "./MovieCarausel";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies);
  console.log(moviesData);

  return (
    <div className="bg-black -mt-[15rem] w-full">
      <MovieCarausel
        title={"Now Playing"}
        movies={moviesData.nowPlayingMovies}
      />
      <MovieCarausel title={"Top Rated"} movies={moviesData.topRatedMovies} />
      <MovieCarausel title={"Popular"} movies={moviesData.popularMovies} />
      <MovieCarausel title={"Upcoming"} movies={moviesData.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
