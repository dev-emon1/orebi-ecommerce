import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import { productData } from "../../Data/productData";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      onClick={onClick}
      className="absolute right-0 top-[40%] z-10 hidden rounded-full bg-[#979797] p-2 xl:inline-block"
    >
      <IoIosArrowRoundForward fill="#fff" className="text-3xl" />
    </span>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      onClick={onClick}
      className="absolute left-[.5%] top-[40%] z-10 hidden rounded-full bg-[#979797] p-2 xl:inline-block"
    >
      <IoIosArrowRoundBack fill="#fff" className="text-3xl" />
    </span>
  );
};

const NewArrival = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-12 md:mt-32">
      <Container>
        <Heading title="New Arrivals" className="mb-6 md:mb-12" />
        <Slider {...settings}>
          {productData.map((item, i) => (
            <div className="max-w-[370px] px-3 md:px-5" key={i}>
              <Product src={item.img} badge={item.badge} />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrival;
