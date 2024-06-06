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
    // validate the data entered
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // login user
    if (message) return;

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        navigate("/browse");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="bg-black bg-opacity-70 w-[28%] h-[65%] mx-auto my-[4rem] rounded-[1rem] p-14">
      <h1 className="text-white text-2xl font-bold mb-8">Login</h1>
      <input
        ref={email}
        className="p-4 text-white my-2 w-full bg-white bg-opacity-20 rounded-md"
        type="text"
        placeholder="Email"
      />
      <input
        ref={password}
        className="p-4 text-white my-2 w-full bg-white bg-opacity-20 rounded-md"
        type="password"
        placeholder="Password"
      />
      <p className="text-red-400 text-xs my-2">{errorMessage}</p>
      <button
        onClick={clickHandler}
        className="bg-red-700 hover:contrast-100 text-white w-full p-4 my-2 rounded-md contrast-150 font-bold"
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
  );
};

export default Login;
