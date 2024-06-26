import React, { useEffect } from "react";
import logo from "../utils/images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const HeaderBrowse = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = () => {
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
  }, []);

  return (
    <div className="h-screen bg-transparent flex justify-between items-start bg-gradient-to-b from-black absolute w-full">
      <img
        className="w-[10rem] brightness-100 contrast-150 ml-10"
        src={logo}
        alt="logo"
      />

      <div className="flex mr-10 mt-4">
        <h1 className="text-white text-10 content-center">
          Hello, {user?.name}
        </h1>
        <button
          className="bg-red-700 hover:contrast-100 contrast-150 text-sm px-4 font-bold pt-1 pb-2 ml-3 mt-1 rounded-md text-white content-center"
          onClick={handleSignIn}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderBrowse;
