import React from "react";
import Img from "../../assets/car.jpg";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat h-screen w-full"
      style={{ backgroundImage: `url(${Img})` }}
    >
     
    </div>
  );
};

export default Banner;
