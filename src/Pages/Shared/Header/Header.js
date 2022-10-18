import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
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
        <Link className="nav-link nav-titles" to="/login">
          Login
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
