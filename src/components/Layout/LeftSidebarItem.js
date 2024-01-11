import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const LeftSidebarItem = (props) => {
  const [drop] = useState(props.subDropdown);
  const [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          className="flex cursor-pointer items-center justify-between border-b border-solid border-[#767676] py-4"
          onClick={() => setShow(!show)}
        >
          <p className="text-base font-normal text-[#767676]">
            {props.color && (
              <span
                className="mr-2 inline-block h-3 w-3 rounded-full"
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </p>
          {show ? (
            <FaMinus className="text-[10px] font-normal text-[#767676]" />
          ) : (
            <FaPlus className="text-[10px] font-normal text-[#767676]" />
          )}
        </div>
      ) : (
        <p className="border-b border-solid border-[#767676] py-4 text-base font-normal capitalize text-[#767676]">
          {props.color && (
            <span
              className="mr-2 inline-block h-3 w-3 rounded-full"
              style={{ background: props.color }}
            ></span>
          )}
          {props.title}
        </p>
      )}
      {show && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSidebarItem;
