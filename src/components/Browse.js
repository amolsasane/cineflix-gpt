import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import HeaderBrowse from "./HeaderBrowse";
import Gpt from "./Gpt";
import Home from "./Home";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
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
