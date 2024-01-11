import React, { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
import Breadcrumb from "../components/Layout/Breadcrumb";
import Flex from "../components/Layout/Flex";
import Pagination from "../components/Layout/Pagination";
import Select from "../components/Layout/Select";
import LeftSidebar from "../components/Layout/LeftSidebar";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Shop = () => {
  const [showNumber, setShowNumber] = useState(12);
  const [featured, setFeatured] = useState("Featured");
  const [show, setShow] = useState(true);
  const options = ["Featured", "USA", "Canada", "UAE"];
  const options2 = ["12", "24", "48", "96"];

  const handlePaginationChange = (e) => {
    setShowNumber(e.target.value);
  };

  const handleFeatured = (e) => {
    setFeatured(e.target.value);
  };

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 575) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <Container>
      <Breadcrumb />
      <Flex className="gap-x-10">
        {show && (
          <div className="absolute left-0 top-0 z-50 w-full bg-[#fcfcfc] p-4 sm:static sm:w-[25%] sm:bg-transparent">
            <RxCross2
              onClick={() => setShow(!show)}
              className="block sm:hidden"
            />
            <LeftSidebar />
          </div>
        )}
        <div className="relative w-full md:w-[75%]">
          <div className="mb-10 flex justify-between gap-x-10 md:justify-end">
            <div className="mb-3.5 flex items-end">
              <MdOutlineFilterAlt
                onClick={() => setShow(!show)}
                className="inline-block text-3xl text-[#767676] sm:hidden"
              />
            </div>
            <Select
              handleChange={handleFeatured}
              options={options}
              value={featured}
              title="Sort by"
              className="block border border-[#f0f0f0] bg-gray-50 p-2.5 text-base font-normal text-[#767676] md:w-[239px]"
            />
            <Select
              handleChange={handlePaginationChange}
              options={options2}
              value={showNumber}
              title="Show"
              className="block border border-[#f0f0f0] bg-gray-50 p-2.5 text-base font-normal text-[#767676] md:w-[139px]"
            />
          </div>
          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
