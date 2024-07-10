import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import langConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies, showError } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GptSearch = () => {
  const lang = useSelector((store) => store.lang.selectedLang);
  const errorMessage = useSelector((store) => store.gpt.error);
  const showErrorMessage = useSelector((store) => store.gpt.movieResults);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
      const promptQuery =
        "Act like a movie suggestion system and show results for the query: " +
        searchText.current.value +
        ". Give 5 movies, comma separated like the example result given ahead. Example Result: 3 Idiots, Avenger, Hulk, Raabta, Kabir Singh";

      const prompt = promptQuery;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      const gptResult = text.split(",");
      console.log(text);

      const promiseArray = gptResult.map((movie) => getMoviesTMDB(movie));
      const tmdbResult = await Promise.all(promiseArray);
      console.log(tmdbResult);

      dispatch(
        addGptMovies({ movieNames: gptResult, movieResults: tmdbResult })
      );
    } catch (error) {
      console.error("Error fetching GPT results", error);
      dispatch(showError(error.message));
    }
  };

  return (
    <div className="text-white pt-[10rem]">
      <h1 className="text-5xl font-bold p-2 m-2 text-center">
        {langConstants[lang].gptHeading}
      </h1>
      <form
        className="m-2 p-2 flex justify-center mb-[5rem]"
        onSubmit={handleSubmit}
      >
        <input
          ref={searchText}
          className="p-4 text-white placeholder-white text-2xl m-1 w-[30%] bg-blue-300 bg-opacity-20 rounded-md border-2"
          type="text"
          placeholder={langConstants[lang].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="bg-red-700 hover:contrast-100 contrast-150 font-bold p-4 m-1 text-2xl rounded-md text-white content-center"
        >
          {langConstants[lang].search} <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </form>
      {!showErrorMessage && errorMessage && (
        <div className="flex justify-center">
          <h1 className="text-white p-2 m-2 w-fit text-center font-bold items-center text-xl">
            {langConstants[lang].gptError}
          </h1>
        </div>
      )}
    </div>
  );
};

export default GptSearch;
