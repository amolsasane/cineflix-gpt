import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";

const Form = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);

  const toggle = () => {
    setIsSignedUp(!isSignedUp);
  };

  return (
    <div className="relative min-h-screen">
      <img
        className="h-full w-full absolute brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
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
