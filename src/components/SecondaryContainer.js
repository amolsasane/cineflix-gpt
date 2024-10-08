import React from "react";
import MovieCarausel from "./MovieCarausel";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies);

  return (
    <div className="bg-black pt-5] lg:pt-0 lg:-mt-[13rem] w-full">
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
