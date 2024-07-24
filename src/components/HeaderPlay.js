import React from "react";
import logo from "../utils/images/logo.png";
import { Link } from "react-router-dom";

const HeaderPlay = () => {
  return (
    <div className="flex flex-between justify-between items-center w-full bg-black absolute py-4 z-10">
      <img
        className="w-[7rem] lg:w-[10rem] brightness-100 contrast-150 ml-10"
        src={logo}
        alt="logo"
      />
      <Link to="/browse">
        <button className="text-white text-md hover:border hover:rounded-lg mt-[1rem] py-1 px-3 mr-10">
          Back
        </button>
      </Link>
    </div>
  );
};

export default HeaderPlay;
