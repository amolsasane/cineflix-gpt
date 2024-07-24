import React, { useEffect } from "react";
import PropTypes from "prop-types";
import logo from "../utils/images/logo.png";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ({ toggle, isSignedUp }) => {
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
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="flex justify-between items-center bg-gradient-to-b from-black relative w-full px-4 sm:px-8 md:px-16 lg:px-32">
      <img
        className="w-[10rem] sm:w-[12rem] md:w-[15rem] brightness-100 contrast-150"
        src={logo}
        alt="logo"
      />

      <button
        className="bg-red-700 hover:contrast-100 contrast-150 px-4 py-2 rounded-md text-white font-bold"
        onClick={toggle}
      >
        {isSignedUp ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  isSignedUp: PropTypes.bool.isRequired,
};

export default Header;
