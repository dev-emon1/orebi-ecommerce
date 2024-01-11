import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";
import { AiFillHeart } from "react-icons/ai";
import { IoGitCompare, IoCartSharp } from "react-icons/io5";

const Product = ({ src, badge, title, price, brand }) => {
  return (
    <div>
      <div className="group relative overflow-y-hidden">
        <Image imgsrc={src} />
        {badge && <Badge title="New" />}
        <div className="absolute bottom-[-74%] left-0 h-40 w-full bg-white px-7 py-6 duration-150 ease-in group-hover:bottom-0 lg:max-xl:bottom-[-76%]">
          <Flex className="cursor-pointer items-center justify-end gap-x-1 hover:font-bold sm:gap-x-4">
            <p className="font-regular text-base text-[#767676] lg:max-xl:text-sm">
              Add to Wish List
            </p>
            <AiFillHeart className="text-base lg:max-xl:text-sm" />
          </Flex>
          <Flex className="my-5 cursor-pointer items-center justify-end gap-x-1 hover:font-bold sm:gap-x-4">
            <p className="font-regular text-base text-[#767676] lg:max-xl:text-sm">
              Compare{" "}
            </p>
            <IoGitCompare className="text-base lg:max-xl:text-sm" />
          </Flex>
          <Flex className="cursor-pointer items-center justify-end gap-x-1 hover:font-bold sm:gap-x-4">
            <p className="font-regular text-base text-[#767676] lg:max-xl:text-sm">
              Add to Cart{" "}
            </p>
            <IoCartSharp className="text-base lg:max-xl:text-sm" />
          </Flex>
        </div>
      </div>
      <div className=" mb-12 mt-0 md:mb-0 md:mt-6">
        <Flex className="items-center justify-between">
          <h3 className="text-xl font-bold text-black lg:max-xl:text-sm">
            Basic Crew Neck Tee
          </h3>
          <p className="font-regular text-base text-[#767676] lg:max-xl:text-sm">
            $44.00
          </p>
        </Flex>
        <p className="font-regular mt-1 text-base text-[#767676] md:mt-4 lg:max-xl:text-sm">
          Black
        </p>
      </div>
    </div>
  );
};

export default Product;
