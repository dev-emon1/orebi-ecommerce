import React from "react";

const Heading = ({ title, className }) => {
  return (
    <h2 className={`text-3xl font-bold text-black md:text-[39px] ${className}`}>
      {title}
    </h2>
  );
};

export default Heading;
