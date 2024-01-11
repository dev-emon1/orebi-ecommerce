import React from "react";

const Image = ({ imgsrc, imgalt }) => {
  return <img src={imgsrc} alt={imgalt} className="w-full" />;
};

export default Image;
