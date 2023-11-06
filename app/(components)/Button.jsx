import React from "react";

const Button = () => {
  return (
    <div className="flex">
      <button className="bg-main rounded-full m-4 px-2 hover:bg-second">
        Click Me!
      </button>
      <button className="bg-blue-500 rounded-full m-4 px-2 hover:bg-second">
        Click Me!
      </button>
    </div>
  );
};

export default Button;
