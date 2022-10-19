import React, { useRef } from "react";
import {
  useSignInWithGoogle,
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase_init";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, loginuser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const formRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = formRef.current[0].value;
    const pass = formRef.current[1].value;
    signInWithEmailAndPassword(email, pass);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className=".container login-container">
        <h3>Login</h3>
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
            <p className="mt-2">{error?.message}</p>
            <br />

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
            signInWithGoogle().then(() => {
              user && navigate("/");
            });
          }}
        >
          <FaGoogle /> Continue with Google
        </button>
        {/* <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        sign in with google
      </button> */}
      </div>
    </div>
  );
};

export default Login;
