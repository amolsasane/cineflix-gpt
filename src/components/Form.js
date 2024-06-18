import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import { bgImage } from "../utils/constants";

const Form = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);

  const toggle = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <div className="relative min-h-screen">
      <img
        className="h-full w-full absolute brightness-50"
        src={bgImage}
        alt="background"
      />
      <div className="relative z-10">
        <Header toggle={toggle} isSignedUp={isSignedUp} />
        {isSignedUp ? <Login toggle={toggle} /> : <Signup toggle={toggle} />}
      </div>
    </div>
  );
};

export default Form;
