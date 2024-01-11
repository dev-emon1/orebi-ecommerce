import React from "react";
import { Link } from "react-router-dom";
import { TfiAngleRight } from "react-icons/tfi";

const Breadcrumb = () => {
  return (
    <div className="my-10 md:my-28">
      <h1 className="mb-3 text-5xl font-bold capitalize text-black">
        {window.location.pathname.split("/")[1]}
      </h1>
      <p className="font-regular flex items-center gap-x-2 text-xs capitalize text-[#767676]">
        <Link to="/">Home</Link> <TfiAngleRight className="font-bold" />{" "}
        {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default Breadcrumb;
