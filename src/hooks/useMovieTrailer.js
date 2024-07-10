import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos",
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addMovieTrailer(trailer));
    };

    !movieTrailer && getMovieVideos();
  }, [dispatch, id]);
};

export default useMovieTrailer;
