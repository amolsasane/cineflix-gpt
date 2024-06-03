import React from "react";
import logo from "../utils/images/logo.png";

const Header = ({ toggle, isSignedUp }) => {
  return (
    <div className="flex flex-between justify-between items-center">
      <img
        className="w-[15rem] brightness-100 contrast-150 ml-[10rem]"
        src={logo}
        alt="logo"
      />
      <button
        className="bg-red-700 hover:contrast-100 contrast-150 px-4 py-2 rounded-md m-4 text-white font-bold h-full content-center mr-[20rem]"
        onClick={toggle}
      >
        {isSignedUp ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

export default Header;
