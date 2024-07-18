import React, { useEffect, useState } from "react";
import HeaderPlay from "./HeaderPlay";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const PlayMovie = () => {
  const movieId = useParams();
  const [movieKey, setMovieKey] = useState("");

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId?.id}/videos`,
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setMovieKey(trailer.key);
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };
    getMovieVideos();
  }, [movieId]);

  return (
    <div>
      <HeaderPlay />
      <iframe
        className="w-full h-[100vh]"
        src={"https://www.youtube.com/embed/" + movieKey + "?rel=0&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PlayMovie;
