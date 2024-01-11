import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./Image";

const MiddleAdvertisement = () => {
  return (
    <div className="mt-10 md:mt-32">
      <Container>
        <Link to="#">
          <Image imgsrc="assets/ads.png" />
        </Link>
      </Container>
    </div>
  );
};

export default MiddleAdvertisement;
