import React from "react";
import "./SignUp.css";

const SignUp = ({ onSignInClick }) => {
  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={onSignInClick}>Already have an account? Sign In here.</p>
    </div>
  );
};

export default SignUp;