import React from "react";
import Breadcrumb from "../components/Layout/Breadcrumb";
import Image from "../components/Layout/Image";
import Container from "../components/Layout/Container";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Breadcrumb />
      <div className="gap-x-3 sm:flex md:gap-x-10">
        <div className="mb-5 w-full md:mb-0 md:w-2/4">
          <Link to="#">
            <Image imgsrc="assets/aboutimg1.png" />
          </Link>
        </div>
        <div className="w-full md:w-2/4">
          <Link to="#">
            <Image imgsrc="assets/aboutimg2.png" />
          </Link>
        </div>
      </div>
      <div className="mb-10 mt-10 md:mb-28 md:mt-32">
        <h3 className="mb-3 text-2xl font-normal text-black md:text-[39px] md:leading-[52px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h3>
      </div>
      <div className="md:flex md:justify-between">
        <div className="w-full md:w-[32%] ">
          <h4 className="text-2xl font-bold text-black">Our Vision</h4>
          <p className="text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="my-3 w-full md:my-0 md:w-[32%]">
          <h4 className="text-2xl font-bold text-black">Our Story</h4>
          <p className="text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
        </div>
        <div className="w-full md:w-[32%] ">
          <h4 className="text-2xl font-bold text-black">Our Vision</h4>
          <p className="text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
