import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="bg-black px-20 py-4 text-sm font-bold text-white"
    >
      {title}
    </Link>
  );
};

export default Button;
