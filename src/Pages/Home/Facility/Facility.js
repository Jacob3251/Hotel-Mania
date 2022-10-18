import React from "react";
import "./Facility.css";
const Facility = ({ facility }) => {
  const { id, name, img, des } = facility;
  return (
    <div className=" w-100 mt-5 full-box">
      <div
        className={
          id % 2 == 0
            ? "small-box container d-flex flew-row justify-content-center align-items-center"
            : "invertbox small-box  container d-flex flew-row justify-content-center align-items-center"
        }
      >
        <div className="img-box">
          <img src={img} className="w-100" alt="" />
        </div>
        <div className=" text-box">
          <h3>{name}</h3>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Facility;
