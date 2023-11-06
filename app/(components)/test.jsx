import React from "react";

const test = () => {
  return (
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="md:flex">
        <div class="md:w-1/2 p-4 md:flex-col md:justify-between">
          <div class="text-center mb-4">
            <h2 class="text-xl font-semibold">Peter</h2>
            <p class="text-sm text-gray-600">Kort bio om mig...</p>
          </div>
        </div>

        <div class="md:w-1/2 p-4">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-gray-300 rounded-full"></div>
            <p class="text-sm font-semibold mt-2">Online Alias: KongKunta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
