import React from "react";
import "./SelectedRoom.css";
import { FaTrashAlt } from "react-icons/fa";
const SelectedRoom = ({ details }) => {
  const { id, value, name, price, img } = details;
  const handleDelete = (id) => {
    const bookedCart = localStorage.getItem("booking-cart");
    if (bookedCart) {
      const bookingCart = JSON.parse(bookedCart);
      if (id in bookingCart) {
        delete bookingCart[id];
        localStorage.setItem("booking-cart", JSON.stringify(bookingCart));
      }
    }
  };
  return (
    <div className="container selfull-box">
      <img src={img} alt="" />
      <div className="container ms-3">
        <h4>{name}</h4>
        <h6>Price: $ {price * value}</h6>
        <h6>Shipping: $14</h6>
        <h6>Quantity: {value}</h6>
      </div>
      <div className="container delete-icon">
        <div className="delbg">
          <FaTrashAlt
            size={30}
            onClick={() => {
              handleDelete(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedRoom;
