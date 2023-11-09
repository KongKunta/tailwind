import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto shadow-lg rounded-lg">
      <div className="flex h-32 justify-evenly">
        <div className="flex flex-col justify-center text-center">
          <p>KongKunta</p>
          <p>En lille bio om mig</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="border w-12 h-12 justify-end rounded-full"></div>

          <p className="text-center">Peter</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
