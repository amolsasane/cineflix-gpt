import React from "react";
import GptSearch from "./GptSearch";
import { bgImage } from "../utils/constants";

const Gpt = () => {
  const divStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={divStyle}>
      <GptSearch />
    </div>
  );
};

export default Gpt;
