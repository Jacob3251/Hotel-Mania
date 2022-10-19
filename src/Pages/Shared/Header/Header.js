import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import { FiMenu } from "react-icons/fi";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase_init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className=" mobile-menu">
        <nav className="navbar navbar-primary bg-primary">
          <div className="mobile-menu-design">
            <Container className="">
              <Link className="nav-link nav-titles ms-3" to="/header">
                <img width={40} src={logo} />
              </Link>
            </Container>
            <button
              className="navbar-toggler mobile-border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
          </div>
        </nav>
        <div className="collapse collapsed-bg" id="navbarToggleExternalContent">
          <Container className="nav-list">
            <Link className="nav-link text-white py-2" to="/">
              Home
            </Link>
            <Link className="nav-link text-white py-2" to="/about">
              About
            </Link>
            <Link className="nav-link text-white py-2" to="/order">
              Order
            </Link>
            {user ? (
              <div
                className="text-white py-2"
                onClick={() => {
                  signOut(auth);
                }}
              >
                SignOut
              </div>
            ) : (
              <Link className="nav-link text-white py-2" to="/login">
                Login
              </Link>
            )}
          </Container>
        </div>
      </div>
      <Navbar className="nav-contain" bg="primary" variant="dark">
        <Container className="nav-list">
          <Link className="nav-link nav-titles ms-3" to="/header">
            <img width={40} src={logo} />
          </Link>
          <Link className="nav-link nav-titles" to="/">
            Home
          </Link>
          <Link className="nav-link nav-titles" to="/about">
            About
          </Link>
          <Link className="nav-link nav-titles" to="/order">
            Order
          </Link>
        </Container>
        <Container className="nav-login">
          {user ? (
            <div
              className="text-white py-2 nav-titles"
              onClick={() => {
                signOut(auth);
              }}
            >
              <span className="user-email">{user.email} </span> SignOut
            </div>
          ) : (
            <Link className="nav-link nav-titles text-white py-2" to="/login">
              Login
            </Link>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
