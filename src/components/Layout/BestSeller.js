import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { bestsellerData } from "../../Data/bestsellerData";
import Product from "./Product";

const BestSeller = () => {
  return (
    <div className="mt-10 md:mt-32">
      <Container>
        <Heading title="Our Bestsellers" className="mb-6 md:mb-12" />
        <div className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
          {bestsellerData.map((item, i) => (
            <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
              <Product
                src={item.img}
                badge={item.badge}
                title={item.title}
                price={item.price}
                brand={item.brand}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
