import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import Rooms from "../Rooms/Rooms";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Banner />
      <Rooms />
      <div className="container d-flex justify-content-center my-5 ">
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            let bookingCart = {};
            const bookedCart = localStorage.getItem("booking-cart");
            if (bookedCart) {
              navigate("/Order");
            } else {
              alert("Haven't selected anything");
            }
          }}
        >
          Proceed to Order
        </Button>
      </div>
      <Facilities />
    </div>
  );
};

export default Home;
