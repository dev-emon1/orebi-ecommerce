import React from "react";

const InputBox = (props) => {
  return (
    <div className="mb-6">
      <h4 className="mb-2.5 text-base font-bold text-black placeholder:text-sm placeholder:font-normal placeholder:text-gray">
        {props.label}
      </h4>
      <props.as
        type={props.type}
        placeholder={props.placeholder}
        className="w-full border-b border-solid border-[#f0f0f0] pb-2.5 outline-0"
      />
    </div>
  );
};

export default InputBox;
