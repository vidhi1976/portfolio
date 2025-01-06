import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-pink-800"
        } p-2 text-white leading-none rounded-full flex  items-center lg:inline-flex  `}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-pink-300"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
