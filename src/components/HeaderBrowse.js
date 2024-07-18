import React, { useEffect } from "react";
import logo from "../utils/images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { removeGptMovies, toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../utils/langSlice";
import aiLogo from "../utils/images/gemini-icon.png";

const HeaderBrowse = () => {
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchBtn = () => {
    dispatch(toggleGptSearch());
    dispatch(removeGptMovies());
  };

  const langChangeHandler = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div
      className={`flex justify-between items-start absolute z-10 w-full pt-4 ${
        showGpt ? "gpt-header" : "default-header"
      }`}
    >
      <img
        className="w-[10rem] brightness-100 contrast-150 ml-10"
        src={logo}
        alt="logo"
      />

      <div className="flex items-center mr-10 mt-4 space-x-3 pt-2 pr-4">
        {!showGpt && (
          <>
            <h1 className="text-white text-sm px-4">
              Hello, {user?.name?.split(" ")?.filter((word) => word)[0]}
            </h1>

            <button
              onClick={handleGptSearchBtn}
              className="text-sm mx-6 p-2 text-white hover:border hover:rounded-lg"
            >
              <img className="w-6 inline-flex" src={aiLogo} alt="ai" /> AI
              Search
            </button>

            <button
              className="text-sm  hover:border hover:rounded-lg py-2 px-4  text-white"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </>
        )}

        {showGpt && (
          <>
            <select
              className="text-white p-2 bg-transparent hover:border hover:rounded-lg mr-10"
              onChange={langChangeHandler}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black"
                >
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleGptSearchBtn}
              className="text-white text-md hover:border hover:rounded-lg pt-1 pb-1 px-3"
            >
              Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderBrowse;
