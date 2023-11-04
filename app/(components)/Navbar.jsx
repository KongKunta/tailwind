import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex p-3 bg-third justify-between">
      <div className="flex">
        <button className="">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="flex">
        <h1>KongKunta</h1>
      </div>
      <div className="flex">User</div>
    </nav>
  );
};

export default Navbar;
