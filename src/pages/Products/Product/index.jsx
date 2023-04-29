import React from "react";

import purisafWater from "assets/img/neutra-sul-professional-grade-oxidizer_1024x1024.jpg";
// eslint-disable-next-line react/prop-types
export const Product = ({ title, image, form, application, specification }) => {
  return (
    <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
      <div className="bg-white rounded-lg mt-5">
        <img src={purisafWater} className="h-60 rounded-md" alt="" />
      </div>
      <div
        className="bg-white shadow-lg rounded-lg -mt-4 w-70"
      >
        <div className="py-5 px-5">
          <span className="font-bold text-gray-800 text-lg">{title}</span>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 font-light">
              Form : {form}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
