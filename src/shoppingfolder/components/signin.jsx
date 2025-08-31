import React from "react";

const SignIn = () => {
  return (
    <div className="loginPage">
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
