import React from "react";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import Rooms from "../Rooms/Rooms";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner />
      <Rooms />
      <Facilities />
    </div>
  );
};

export default Home;
