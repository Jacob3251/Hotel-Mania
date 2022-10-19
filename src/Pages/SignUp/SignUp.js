import "./SignUp.css";
import React, { useRef, useState } from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase_init";

import { FaGoogle } from "react-icons/fa";
const SignUp = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [inputError, setInputError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const formRef = useRef();
  const handlePass = (event) => {
    const pass = formRef.current[1].value;
    const confirmpass = formRef.current[2].value;
    if (pass !== confirmpass) {
      setInputError("Your two passwords did not match");
      return;
    }
    if (pass.length < 6) {
      setInputError("Please input a bigger password");
      return;
    }
    if (pass === confirmpass) {
      setInputError("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = formRef.current[0].value;
    const pass = formRef.current[1].value;
    const confirmpass = formRef.current[2].value;
    createUserWithEmailAndPassword(email, pass).then(() => {
      event.target.reset();
      setInputError("");
    });
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className=".container login-container">
        <h3>Sign Up</h3>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="container">
            <label className="login-label" htmlFor="email">
              Email
            </label>
            <br />
            <input type="email" name="email" className="login-input" required />
            <br />
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              className="login-input"
              required
            />
            <br />
            <label className="login-label" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              className="login-input"
              onChange={handlePass}
              required
            />
            <br />
            <p className="mt-2">{inputError}</p>
            <input type="submit" name="submit" className="login-submit" />
          </div>
        </form>

        <p>
          New to Hotel-Heaven?{" "}
          <span>
            <Link className="bottomtext" to="/signup">
              {" "}
              Create New Account
            </Link>
          </span>
        </p>
        <button
          className=" social-button"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <FaGoogle /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
