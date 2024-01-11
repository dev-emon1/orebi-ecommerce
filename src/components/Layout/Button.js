import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-black px-20 py-4 text-sm font-bold text-white">
      {title}
    </button>
  );
};

export default Button;
