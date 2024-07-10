import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptResults = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="ml-12 text-white">
      {movieNames.map((name, index) => (
        <div key={index} className="overflow-hidden">
          <h1 className="text-white font-bold text-2xl rounded m-2">{name}</h1>
          <div className="flex w-fit pb-10">
            {movieResults[index]?.slice(0, 8).map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GptResults;
