import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import langConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies, showError } from "../utils/gptSlice";
import { API_OPTIONS, bgImage } from "../utils/constants";
import Loader from "./Loader";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Use ES6 import

const GptSearch = () => {
  const lang = useSelector((store) => store.lang.selectedLang);
  const errorMessage = useSelector((store) => store.gpt.error);
  const movieResults = useSelector((store) => store.gpt.movieResults);
  const searchText = useRef(null);
  const resultsRef = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  // eslint-disable-next-line no-undef
  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  useEffect(() => {
    if (hasResults && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hasResults]);

  const handleSubmit = (e) => {
    e.preventDefault();
    gptSearchClickHandler();
  };

  const getMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    const result = json.results;
    return result;
  };

  const gptSearchClickHandler = async () => {
    try {
      setLoading(true); // Start loading
      setHasResults(false);
      const promptQuery =
        "Act like a movie suggestion system and show results for the query: " +
        searchText.current.value +
        ". Give 5 movies, comma separated like the example result given ahead. Example Result: 3 Idiots, Avenger, Hulk, Raabta, Kabir Singh";

      const prompt = promptQuery;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      const gptResult = text.split(",");

      const promiseArray = gptResult.map((movie) => getMoviesTMDB(movie));
      const tmdbResult = await Promise.all(promiseArray);

      dispatch(
        addGptMovies({ movieNames: gptResult, movieResults: tmdbResult })
      );
      setHasResults(true);
    } catch (error) {
      console.error("Error fetching GPT results", error);
      dispatch(showError(error.message));
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="text-white pt-[15rem] min-h-screen bg-cover relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${bgImage})`,
      }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 px-4 text-center">
        {langConstants[lang].gptHeading}
      </h1>
      <form
        className="m-1 lg:m-2 p-1 lg:p-2 flex justify-center mb-[2rem] lg:mb-[5rem]"
        onSubmit={handleSubmit}
      >
        <input
          ref={searchText}
          className="p-4 text-white placeholder-white text-md sm:text-md md:text-lg lg:text-2xl m-1 w-[65%] sm:w-[50%] md:w-[50%] lg:w-[45%] bg-blue-300 bg-opacity-20 rounded-md border-2"
          type="text"
          placeholder={langConstants[lang].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="bg-red-700 hover:contrast-100 contrast-150 font-bold p-4 m-1 text-lg lg:text-2xl rounded-md text-white content-center"
          disabled={loading} // Disable the button when loading
        >
          {langConstants[lang].search} <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </form>

      {loading && (
        <div className="flex justify-center mt-4">
          <Loader />
        </div>
      )}

      {!movieResults && errorMessage && (
        <div className="flex justify-center">
          <h1 className="text-white p-2 m-2 w-fit text-center font-bold items-center text-md lg:text-xl">
            {langConstants[lang].gptError}
          </h1>
        </div>
      )}

      <div ref={resultsRef}></div>
    </div>
  );
};

export default GptSearch;
