import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import langConstants from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const lang = useSelector((store) => store.lang.selectedLang);

  const handleSumbmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-white">
      <h1 className="text-5xl font-bold p-2 m-2">
        {langConstants[lang].gptHeading}
      </h1>
      <form className="m-2 p-2 flex justify-center" onSubmit={handleSumbmit}>
        <input
          className="p-4 text-white placeholder-white text-2xl m-1 w-[60%] bg-blue-300 bg-opacity-20 rounded-md border border-2"
          type="text"
          placeholder={langConstants[lang].gptSearchPlaceholder}
        />
        <button className="bg-red-700 hover:contrast-100 contrast-150 font-bold p-4 m-1 text-2xl rounded-md text-white content-center">
          {langConstants[lang].search} <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
