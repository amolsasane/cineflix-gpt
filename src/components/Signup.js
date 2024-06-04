import React from "react";
import { checkValidData } from "../utils/validate";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Signup = ({ toggle }) => {
  const [errorMessage, setErrorMessage] = useState(null);

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
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="absolute bg-black bg-opacity-70 w-[28%] h-[75%] mx-auto my-[4rem] left-0 right-0 rounded-[1rem] p-14">
      <h1 className="text-white text-[2rem] font-bold mb-8">Sign Up</h1>
      <input
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="text"
        placeholder="Full Name"
      ></input>
      <input
        ref={email}
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="text"
        placeholder="Email"
      ></input>
      <input
        ref={password}
        className="p-4 my-2 w-full text-white bg-white bg-opacity-20 rounded-md"
        type="password"
        placeholder="Password"
      ></input>
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

export default Signup;
