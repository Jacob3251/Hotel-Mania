import React from "react";
import img1 from "../../../images/Rooms/1.png";
import img2 from "../../../images/Rooms/2.png";
import img3 from "../../../images/Rooms/3.png";
import Room from "../Room/Room";
const rooms = [
  {
    id: 1,
    name: "Single Room",
    img: img1,
    description: "Single room is for lonely people",
  },
  {
    id: 2,
    name: "Double Room",
    img: img2,
    description: "Double room is for old people",
  },
  {
    id: 3,
    name: "Presedential Suite",
    img: img3,
    description: "Presedential suite is for young energetic people",
  },
];

const Rooms = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5">Our Rooms</h3>
      <div className="row text-center">
        {rooms.map((room) => (
          <Room key={room.id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
