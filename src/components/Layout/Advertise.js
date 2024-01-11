import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className="mt-5 md:mt-36">
      <Container>
        <Flex className="gap-x-3 md:gap-x-10">
          <div className="max-w-2/4">
            <Link to="#">
              <Image className="block" imgsrc="assets/ad1.png" />
            </Link>
          </div>
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc="assets/ad2.png" />
            </Link>
            <Link to="#" className="mt-2 inline-block md:mt-9">
              <Image imgsrc="assets/ad2.png" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
