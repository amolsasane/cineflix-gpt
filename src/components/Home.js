import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import PlayMovie from "./PlayMovie";

const Home = () => {
  const showMovie = useSelector((store) => store.movies.playMovie);
  return (
    <div>
      {!showMovie ? (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
          <Footer />
        </>
      ) : (
        <PlayMovie />
      )}
    </div>
  );
};

export default Home;
