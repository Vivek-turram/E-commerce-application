import React from "react";

const SignUp = () => {
  return (
    <div className="signupPage">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
