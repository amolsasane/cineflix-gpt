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
      className={`flex justify-between items-start absolute z-10 w-full bg-black lg:bg-transparent pb-2 lg:pb-0 lg:pt-4 ${
        showGpt ? "gpt-header" : "default-header"
      }`}
    >
      <img
        className="w-[5rem] lg:w-[10rem] brightness-100 contrast-150 ml-3 mt-1 lg:mt-0 lg:ml-10"
        src={logo}
        alt="logo"
      />

      <div className="flex items-center mr-2 lg:mr-10 mt-0 lg:mt-4 space-x-0 lg:space-x-3 pt-2 lg:pr-4">
        {!showGpt && (
          <>
            <h1 className="hidden lg:inline-block text-white text-sm px-4">
              Hello, {user?.name?.split(" ")?.filter((word) => word)[0]}
            </h1>

            <button
              onClick={handleGptSearchBtn}
              className="text-xs lg:text-sm mx-6 p-1 lg:p-2 text-white hover:border hover:rounded-lg"
            >
              <img className="w-4 lg:w-6 inline-flex" src={aiLogo} alt="ai" />{" "}
              AI Search
            </button>

            <button
              className="text-xs lg:text-sm  hover:border hover:rounded-lg py-1 lg:py-2 px-2 lg:px-4  text-white"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </>
        )}

        {showGpt && (
          <>
            <select
              className="text-white p-1 lg:p-2 bg-transparent hover:border hover:rounded-lg mr-5 lg:mr-10 text-xs lg:text-[1rem]"
              onChange={langChangeHandler}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="text-black text-xs lg:text-md"
                >
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleGptSearchBtn}
              className="text-white text-xs lg:text-[1rem] hover:border hover:rounded-lg py-1 lg:py-2 px-3"
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
