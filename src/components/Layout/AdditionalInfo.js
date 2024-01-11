import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbNumber2 } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";

const AdditionalInfo = () => {
  return (
    <div className="border border-solid border-[#f0f0f0] py-[10px] sm:py-5">
      <Container>
        <Flex className="justify-between">
          <Flex className="items-center gap-x-1 sm:gap-x-4">
            <TbNumber2 className="text-[10px] sm:text-2xl" stroke="#262626" />
            <p className="font-regular text-[10px] text-[#6d6d6d] sm:text-base">
              Two years warranty
            </p>
          </Flex>
          <Flex className="items-center gap-x-1 sm:gap-x-4">
            <FaTruck className="text-[10px] sm:text-2xl" fill="#262626" />
            <p className="font-regular text-[10px] text-[#6d6d6d] sm:text-base">
              Free shipping
            </p>
          </Flex>
          <Flex className="items-center gap-x-1 sm:gap-x-4">
            <IoReloadSharp
              className="text-[10px] font-bold sm:text-2xl"
              fill="#262626"
            />
            <p className="font-regular text-[10px] text-[#6d6d6d] sm:text-base">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
