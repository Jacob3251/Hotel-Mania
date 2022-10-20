import React, { useEffect, useState } from "react";
import Room from "../Home/Room/Room";
import img1 from "../../images/Rooms/1.png";
import img2 from "../../images/Rooms/2.png";
import img3 from "../../images/Rooms/3.png";
import SelectedRoom from "./SelectedRoom/SelectedRoom";
import BillSummary from "./BillSummary/BillSummary";
import "./Order.css";
const Order = () => {
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
      img: img1,
    },
    {
      id: 2,
      value: bookedCart[2],
      name: "Double Room",
      price: 699,
      img: img2,
    },
    {
      id: 3,
      value: bookedCart[3],
      name: "Presedential Suite",
      price: 999,
      img: img3,
    },
  ];
  const roomDetails = bookingDetails.filter((u) => u.value > 0);
  console.log(roomDetails);

  return (
    <div className={roomDetails.length !== 0 ? "fill-box" : "emptybox"}>
      <h3 className="text-center my-5">
        {roomDetails.length == 0 ? "" : "Review Order"}
      </h3>
      <div className="container select-room">
        {roomDetails.map((details) => (
          <SelectedRoom key={details.id} details={details}></SelectedRoom>
        ))}
      </div>
      <div className="container">
        <BillSummary />
      </div>
    </div>
  );
};

export default Order;
