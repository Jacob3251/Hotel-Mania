import React from "react";
import pool from "../../../images/Facilities/pool.png";
import lounge from "../../../images/Facilities/lounge.png";
import casino from "../../../images/Facilities/casino.png";
import restaurant from "../../../images/Facilities/restaurant.png";
import Facility from "../Facility/Facility";
import "./Facilities.css";
const facilities = [
  {
    id: 1,
    img: lounge,
    name: "Beautiful Lounge",
    des: "The hotel has a beautiful lounge for guests to sit and relax",
  },
  {
    id: 2,
    img: casino,
    name: "Grand Casino",
    des: "The hotel has a large casino for guests to lose money and cry",
  },
  {
    id: 3,
    img: pool,
    name: "Large Pool",
    des: "The hotel has a scenic pool for guests to swim and drown",
  },
  {
    id: 4,
    img: restaurant,
    name: "Big Restaurant",
    des: "The hotel has a large restaurant for guests to eat and have food poisoing",
  },
];
const Facilities = () => {
  return (
    <div className="container text-center py-5">
      <h3>Our Facilities</h3>
      <div>
        {facilities.map((facility) => (
          <Facility key={facility.id} facility={facility}></Facility>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
