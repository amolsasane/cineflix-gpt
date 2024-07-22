import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ toggle }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const clickHandler = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        navigate("/browse");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-black bg-opacity-70 w-full max-w-md h-auto mx-auto rounded-lg p-10 mt-32 lg:mt-16 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
          Login
        </h1>
        <input
          ref={email}
          className="p-3 sm:p-4 text-white my-2 w-full bg-white bg-opacity-20 rounded-md"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-3 sm:p-4 text-white my-2 w-full bg-white bg-opacity-20 rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-400 text-xs my-2">{errorMessage}</p>
        <button
          onClick={clickHandler}
          className="bg-red-700 hover:contrast-100 text-white w-full p-3 sm:p-4 my-2 rounded-md contrast-150 font-bold"
        >
          Login
        </button>
        <p className="text-gray-400 mt-4">
          New to Cineflix?{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggle}
          >
            Sign up now!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
