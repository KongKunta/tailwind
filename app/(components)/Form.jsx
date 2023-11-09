import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen items-center  bg-main">
      <div className="max-w-lg mx-auto shadow-xl rounded-lg h-auto p-8 bg-third">
        <form className="flex flex-col">
          <label className="text-center">Sign Up</label>
          <div>
            <label for="name">Name</label>
          </div>
          <div className="flex justify-between">
            <input type="text" id="name" placeholder="First" />
            <input type="text" id="name" placeholder="Last" />
          </div>
          <div className="flex-col flex">
            <label for="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className=" flex flex-col">
            <label for="Address">Address</label>
            <input
              type="text"
              className="mb-2"
              id="Address"
              placeholder="Street Address"
            />
            <input
              type="text"
              id="Address2"
              placeholder="Street Address Line 2"
            />
          </div>
          <div className="flex flex-col mt-2 gap-2">
            <div className="justify-between flex">
              <input type="text" id="City" placeholder="City" />
              <input type="text" id="Region" placeholder="Region" />
            </div>
            <div className="justify-between flex">
              <input type="text" id="Postal" placeholder="Postal / Zip Code" />
              <input type="text" id="Country" placeholder="Country" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
