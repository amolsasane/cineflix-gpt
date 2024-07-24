import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import HeaderBrowse from "./HeaderBrowse";
import Gpt from "./Gpt";
import Home from "./Home";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTopRateMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <HeaderBrowse />
      {showGpt ? <Gpt /> : <Home />}
    </div>
  );
};

export default Browse;
