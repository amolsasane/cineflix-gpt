import React, { useEffect } from "react";
import logo from "../utils/images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../utils/langSlice";

const HeaderBrowse = () => {
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
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
  };

  const langChangeHandler = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div
      className={`flex justify-between items-start absolute w-full pt-4 ${
        showGpt ? "gpt-header" : "default-header"
      }`}
    >
      <img
        className="w-[10rem] brightness-100 contrast-150 ml-10"
        src={logo}
        alt="logo"
      />

      <div className="flex items-center mr-10 mt-4 space-x-3">
        {!showGpt && (
          <>
            <h1 className="text-white text-10 content-center">
              Hello, {user?.name}
            </h1>

            <button
              onClick={handleGptSearchBtn}
              className="bg-white contrast-150 text-sm px-4 font-bold pt-1 pb-2 rounded-md content-center"
            >
              GPT Search
            </button>

            <button
              className="bg-red-700 hover:contrast-100 contrast-150 text-sm px-4 font-bold pt-1 pb-2 rounded-md text-white content-center"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </>
        )}

        {showGpt && (
          <>
            <select
              className="bg-gray-900 rounded-md text-white p-2"
              onChange={langChangeHandler}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleGptSearchBtn}
              className="bg-white contrast-150 px-4 font-bold pt-1 pb-2 rounded-md content-center ml-auto"
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
