import HeaderBrowse from "./HeaderBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <HeaderBrowse />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
