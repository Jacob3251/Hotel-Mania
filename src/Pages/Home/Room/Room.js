import React from "react";
import { Button, Card } from "react-bootstrap";

const Room = ({ room }) => {
  const { id, name, img, description } = room;
  return (
    <div className="d-flex justify-content-center g-5 col-sm-12 col-md-6 col-lg-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Book {name}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Room;
