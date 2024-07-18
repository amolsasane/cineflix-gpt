import React from "react";
import GptSearch from "./GptSearch";
import GptResults from "./GptResults";
import Footer from "./Footer";

const Gpt = () => {
  return (
    <div>
      <GptSearch />
      <GptResults />
      <Footer />
    </div>
  );
};

export default Gpt;
