import React, { useState } from "react";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const ParentComponent = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleSignInClick = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      {showSignUp ? <SignUp onSignInClick={handleSignInClick} /> : <Login onSignUpClick={handleSignUpClick} />}
    </div>
  );
};

export default ParentComponent;