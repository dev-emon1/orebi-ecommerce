import React, { useState } from "react";
import Slider from "react-slick";
import Image from "./Image";
import { Link } from "react-router-dom";
import Container from "./Container";

const Banner = () => {
  const [dotActive, setDotActive] = useState("");
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "6%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "10px 0",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "55%",
                left: "1%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="bg-[#F5F7F9]">
      <Container>
        <Slider {...settings}>
          <Link to="#">
            <div>
              <Image imgsrc="assets/banner.png" />
            </div>
          </Link>
          <Link to="#">
            <div>
              <Image imgsrc="assets/banner.png" />
            </div>
          </Link>
          <Link to="#">
            <div>
              <Image imgsrc="assets/banner.png" />
            </div>
          </Link>
        </Slider>
      </Container>
    </div>
  );
};

export default Banner;
