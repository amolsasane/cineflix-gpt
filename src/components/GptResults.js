import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptResults = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  const [cardsToRender, setCardsToRender] = useState(0);

  useEffect(() => {
    // Function to calculate the number of cards to render based on screen width
    const calculateCardsToRender = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        // Large screens (e.g., laptops, desktops)
        setCardsToRender(8);
      } else if (screenWidth >= 768) {
        // Medium screens (e.g., tablets)
        setCardsToRender(6);
      } else {
        // Small screens (e.g., mobile phones)
        setCardsToRender(4);
      }
    };

    // Initial calculation
    calculateCardsToRender();

    // Recalculate on window resize
    window.addEventListener("resize", calculateCardsToRender);
    return () => {
      window.removeEventListener("resize", calculateCardsToRender);
    };
  }, []);

  if (!movieNames) return null;

  return (
    <div className="pl-6 lg:pl-12 text-white bg-black">
      {movieNames.map((name, index) => (
        <div key={index} className="overflow-hidden">
          <h1 className="text-white font-bold text-lg lg:text-2xl rounded m-2">
            {name}
          </h1>
          <div className="flex w-fit pb-5 lg:pb-10">
            {movieResults[index]?.slice(0, cardsToRender).map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                id={movie.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GptResults;
