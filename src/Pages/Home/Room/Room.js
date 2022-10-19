import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Room = ({ room }) => {
  const { id, name, img, description } = room;
  const navigate = useNavigate();
  const addToDb = (x) => {
    let bookingCart = {};
    const bookedCart = localStorage.getItem("booking-cart");
    if (bookedCart) {
      bookingCart = JSON.parse(bookedCart);
    }
    // adding quantity
    const quantity = bookingCart[x.id];
    if (quantity) {
      const newQuantity = quantity + 1;
      bookingCart[x.id] = newQuantity;
    } else {
      bookingCart[x.id] = 1;
    }
    localStorage.setItem("booking-cart", JSON.stringify(bookingCart));
  };
  return (
    <div className="d-flex justify-content-center g-5 col-sm-12 col-md-6 col-lg-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              addToDb(room);
            }}
          >
            Book {name}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Room;
