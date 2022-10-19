import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BillSummary.css";
const BillSummary = () => {
  const getBookedCart = () => {
    let bookingCart = {};
    const bookedCart = localStorage.getItem("booking-cart");
    if (bookedCart) {
      bookingCart = JSON.parse(bookedCart);
    }

    return bookingCart;
  };
  const bookedCart = getBookedCart();
  const bookingDetails = [
    {
      id: 1,
      value: bookedCart[1],
      name: "Single Room",
      price: 399,
    },
    {
      id: 2,
      value: bookedCart[2],
      name: "Double Room",
      price: 699,
    },
    {
      id: 3,
      value: bookedCart[3],
      name: "Presedential Suite",
      price: 999,
    },
  ];
  const roomDetails = bookingDetails.filter((u) => u.value > 0);
  let total = 0;
  for (var i = 0; i < roomDetails.length; i++) {
    total = roomDetails[i].price * roomDetails[i].value + total;
  }
  const tax = 19.6;
  const shipping = 14;
  let grandtotal = total + tax + shipping;
  const navigate = useNavigate();
  return (
    <div className="container fullbox">
      <h3>Summary</h3>
      <hr />
      <h5>Seleted Items: {roomDetails.length}</h5>
      <h5>Total Price: {total}</h5>
      <h5>Total Shipping: ${roomDetails.length === 0 ? "0" : shipping}</h5>
      <h5>Tax: ${roomDetails.length === 0 ? "0" : tax}</h5>
      <h4>Grand Total: {roomDetails.length === 0 ? "0" : grandtotal}</h4>
      <Button
        className="checkout-btn"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Proceed CheckOut
      </Button>
    </div>
  );
};

export default BillSummary;
