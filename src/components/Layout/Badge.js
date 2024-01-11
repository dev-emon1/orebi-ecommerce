import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="absolute left-5 top-5 inline-block bg-black px-8 py-2 text-white">
      {title}
    </span>
  );
};

export default Badge;
