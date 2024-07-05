import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import langConstants from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { showError } from "../utils/gptSlice";

const GptSearch = () => {
  const lang = useSelector((store) => store.lang.selectedLang);
  const errorMessage = useSelector((store) => store.gpt.error);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleSubmit = (e) => {
    e.preventDefault();
    gptSearchClickHandler();
  };

  const gptSearchClickHandler = async () => {
    try {
      const promptQuery =
        "Act like a movie suggestion system and show results for the query: " +
        searchText.current.value +
        ". Give 5 movies, comma separated like the example result given ahead. Example Result: 3 Idiots, Avenger, Hulk, Raabta, Kabir Singh.";

      const prompt = promptQuery;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    } catch (error) {
      console.error("Error fetching GPT results", error);
      dispatch(showError(error.message));
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-5xl font-bold p-2 m-2 text-center">
        {langConstants[lang].gptHeading}
      </h1>
      <form className="m-2 p-2 flex justify-center" onSubmit={handleSubmit}>
        <input
          ref={searchText}
          className="p-4 text-white placeholder-white text-2xl m-1 w-[60%] bg-blue-300 bg-opacity-20 rounded-md border border-2"
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
      {errorMessage && (
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
