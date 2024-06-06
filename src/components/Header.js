import React from "react";
import logo from "../utils/images/logo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = ({ toggle, isSignedUp }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignIn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="flex flex-between justify-between items-center bg-gradient-to-b from-black relative w-full">
      <img
        className="w-[15rem] brightness-100 contrast-150 ml-[10rem]"
        src={logo}
        alt="logo"
      />

      {user ? (
        <div className="flex flex-wrap">
          <h1 className="text-white text-[20px] font-bold content-center mt-11 m-4">
            Hello, {user.name}
          </h1>
          <button
            className="bg-red-700 hover:contrast-100 contrast-150 px-4 py-2 rounded-md mt-10 text-white font-bold h-full content-center mr-[10rem]"
            onClick={handleSignIn}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="bg-red-700 hover:contrast-100 contrast-150 px-4 py-2 rounded-md mt-10 text-white font-bold h-full content-center mr-[20rem]"
          onClick={toggle}
        >
          {isSignedUp ? "Sign Up" : "Login"}
        </button>
      )}
    </div>
  );
};

export default Header;
