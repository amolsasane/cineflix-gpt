import HeaderBrowse from "./HeaderBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTopRateMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <HeaderBrowse />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
