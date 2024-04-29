import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome to the Online Book Reader App!</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;