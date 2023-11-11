import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Korrekt import uden stavefejl
import { faImage } from "@fortawesome/free-solid-svg-icons"; // Korrekt import uden stavefejl
import { faFile } from "@fortawesome/free-solid-svg-icons"; // Korrekt import uden stavefejl
import { faPowerOff } from "@fortawesome/free-solid-svg-icons"; // Korrekt import uden stavefejl
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"; // Korrekt import uden stavefejl

const Home = () => {
  return (
    <div className="min-h-screen items-center  bg-main">
      <div className="max-w-lg mx-auto shadow-xl rounded-lg h-auto p-8 bg-third">
        <div className="flex justify-center">
          <input
            className="w-full rounded-lg"
            placeholder="Søg efter apps, indstillinger eller dokumenter"
          ></input>
        </div>
        <div className="flex justify-between p-4">
          <p>Fastgjort</p>
          <button className="rounded-md bg-second ">
            Alle apps <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className="flex-1 max-w-4xl mx-auto p-4">
          <div className="flex justify-between mb-4">
            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />
          </div>
          <div className="flex justify-between mb-4">
            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />
          </div>
          <div className="flex justify-between">
            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />

            <FontAwesomeIcon icon={faImage} size="2xl" />
          </div>
        </div>
        <div className="flex justify-between p-4">
          <p>Anbefalet</p>
          <button className="rounded-md bg-second">
            Mere <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        <div className="flex justify-between px-4">
          <div className="flex">
            <FontAwesomeIcon icon={faFile} size="2xl" />
            <div className="ml-1">
              <p className="text-sm">Javascript</p>
              <p className="text-xs">47m siden.</p>
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faFile} size="2xl" />
            <div className="ml-1">
              <p className="text-sm">Javascript</p>
              <p className="text-xs">47m siden.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex">
            <FontAwesomeIcon icon={faFile} size="2xl" />
            <div className="ml-1">
              <p className="text-sm">Javascript</p>
              <p className="text-xs">47m siden.</p>
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faFile} size="2xl" />
            <div className="ml-1">
              <p className="text-sm">Javascript</p>
              <p className="text-xs">47m siden.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4">
          <div className="flex">
            <FontAwesomeIcon icon={faFile} size="2xl" />
            <div className="ml-1">
              <p className="text-sm">Javascript</p>
              <p className="text-xs">47m siden.</p>
            </div>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faFile} size="2xl" />
            <div className="ml-1">
              <p className="text-sm">Javascript</p>
              <p className="text-xs">47m siden.</p>
            </div>
          </div>
        </div>
        <div className="m-4 mt-8 flex justify-between ">
          <div className="flex">
            <div className="mr-2 border rounded-full h-5 w-5"></div>
            <p className="text-sm">Peter Christiansen</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPowerOff} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
