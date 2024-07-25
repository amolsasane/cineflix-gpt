import React, { useRef, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Signup = ({ toggle }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const clickHandler = () => {
    // validate the data entered
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // create user account
    if (message) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
        }).then(() => {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, name: displayName }));
        });
        navigate("/browse");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="bg-black bg-opacity-70 w-full max-w-md h-auto mx-auto rounded-lg p-10 mt-32 lg:mt-16 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
        Sign Up
      </h1>
      <input
        ref={name}
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="text"
        placeholder="Full Name"
      />
      <input
        ref={email}
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="text"
        placeholder="Email"
      />
      <input
        ref={password}
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="password"
        placeholder="Password"
      />
      <p className="text-red-400 text-xs my-2">{errorMessage}</p>
      <button
        onClick={clickHandler}
        className="bg-red-700 hover:contrast-100 text-white w-full p-4 my-2 rounded-md contrast-150 font-bold"
      >
        Sign Up
      </button>
      <p className="text-gray-400 mt-4">
        Already a member?{" "}
        <span
          className="text-white hover:underline cursor-pointer"
          onClick={toggle}
        >
          Login now!
        </span>
      </p>
    </div>
  );
};

// Define prop types for the Signup component
Signup.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Signup;
