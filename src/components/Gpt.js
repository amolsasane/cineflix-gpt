import React from "react";
import GptSearch from "./GptSearch";
import GptResults from "./GptResults";
import { bgImage } from "../utils/constants";

const Gpt = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${bgImage})`,
      }}
    >
      <GptSearch />
      <GptResults />
    </div>
  );
};

export default Gpt;
