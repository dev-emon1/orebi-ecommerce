import React from "react";
import Container from "../components/Layout/Container";
import Button from "../components/Layout/Button";
import { FaSearch } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <Container>
      <div className="box-border max-w-[625px]">
        <h1 className="text-[150px] font-bold text-black md:text-[200px]">
          404
        </h1>
        <p className="mb-12 text-base font-normal text-gray">
          The page you were looking for couldn't be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Type to search"
            className="mb-16 w-full border border-solid border-[#f0f0f0] p-5 outline-0 placeholder:text-base placeholder:font-normal placeholder:text-gray md:max-lg:w-3/4"
          />
          <FaSearch className="absolute right-5 top-[19%] h-4 w-4 cursor-pointer text-black md:max-lg:right-[11rem]" />
        </div>
        <Button title="Back to Home" link="/" />
      </div>
    </Container>
  );
};

export default PageNotFound;
