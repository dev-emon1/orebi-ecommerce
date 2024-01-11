import React, { useState } from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown, dropTitle, data }) => {
  const [drop] = useState(dropDown);
  const [show, setShow] = useState(false);
  return (
    <div className="mb-12">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3 className="text-xl font-bold text-black">{dropTitle}</h3>
          {show ? <GoTriangleDown /> : <GoTriangleRight />}
        </div>
      ) : (
        <h3 className="cursor-pointer text-xl font-bold text-black">
          {dropTitle}
        </h3>
      )}

      {show && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <LeftSidebarItem
                key={index}
                subDropdown={item.subcategory ? true : false}
                title={item.name}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h4 className="border-b border-solid border-[#767676] py-4 text-base font-normal text-[#767676]">
                      {sitem.name}
                    </h4>
                  ))}
              </LeftSidebarItem>
            ) : (
              <LeftSidebarItem
                key={index}
                subDropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h4 className="border-b border-solid border-[#767676] py-4 text-base font-normal text-[#767676]">
                      {sitem.name}
                    </h4>
                  ))}
              </LeftSidebarItem>
            ),
          )}
        </>
      )}

      {!drop && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <LeftSidebarItem
                key={index}
                subDropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h4 className="border-b border-solid border-[#767676] py-4 text-base font-normal text-[#767676]">
                      {sitem.name}
                    </h4>
                  ))}
              </LeftSidebarItem>
            ) : (
              <LeftSidebarItem
                key={index}
                subDropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h4 className="border-b border-solid border-[#767676] py-4 text-base font-normal text-[#767676]">
                      {sitem.name}
                    </h4>
                  ))}
              </LeftSidebarItem>
            ),
          )}
        </>
      )}
    </div>
  );
};

export default SidebarContent;
