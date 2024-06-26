import React, { useEffect } from "react";
import logo from "../utils/images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ({ toggle, isSignedUp }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    <div className="flex flex-between justify-between items-center bg-gradient-to-b from-black relative w-full">
      <img
        className="w-[15rem] brightness-100 contrast-150 ml-[10rem]"
        src={logo}
        alt="logo"
      />

      <button
        className="bg-red-700 hover:contrast-100 contrast-150 px-4 py-2 rounded-md mt-10 text-white font-bold h-full content-center mr-[20rem]"
        onClick={toggle}
      >
        {isSignedUp ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

export default Header;
