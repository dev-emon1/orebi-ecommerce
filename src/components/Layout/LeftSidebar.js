import React from "react";
import SidebarContent from "./SidebarContent";
import { brands, category, colors, prices } from "../../Data/data";

const LeftSidebar = () => {
  return (
    <>
      <SidebarContent
        dropDown={true}
        dropTitle="Shop by Category"
        data={category}
      />
      <SidebarContent
        dropDown={false}
        dropTitle="Shop by Colors"
        data={colors}
      />
      <SidebarContent
        dropDown={false}
        dropTitle="Shop by Brand"
        data={brands}
      />
      <SidebarContent dropDown={true} dropTitle="Shop by Price" data={prices} />
    </>
  );
};

export default LeftSidebar;
