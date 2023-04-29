import React from "react";
import { Tilt } from "react-tilt";

import purisafWater from "assets/img/neutra-sul-professional-grade-oxidizer_1024x1024.jpg";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

// eslint-disable-next-line react/prop-types
export const Product = ({ title, image, form, application, specification }) => {
  return (
    <Tilt
      options={defaultOptions}
      className="col-span-4 sm:col-span-5 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
    >
      <div className="bg-white rounded-lg mt-5 border-solid border-2">
        <img src={purisafWater} className="h-60 rounded-md" alt="" />
      </div>
      <div className="bg-white shadow-lg rounded-lg -mt-4 w-70 border-solid border-2">
        <div className="py-5 px-5">
          <span className="font-bold text-gray-800 text-lg">{title}</span>
          <div className="flex flex-col  items-start justify-between">
            <div className="text-sm text-gray-600 font-light">
              Form : {form}
            </div>
            <div className="text-sm text-gray-600 font-light">
              Application: {application}
            </div>
            <div className="text-sm text-gray-600 font-light">
              Specification: {specification}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
