import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import List from "./List";
import ListItem from "./ListItem";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { categoryData } from "../../Data/categoryData";
import Search from "./Search";
import Image from "./Image";
import { Link } from "react-router-dom";

const Header = () => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const categoryRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setShowCategoryDropdown(true);
      } else {
        setShowCategoryDropdown(false);
      }

      if (userRef.current.contains(e.target)) {
        setShowUserDropdown(true);
      } else {
        setShowUserDropdown(false);
      }

      if (cartRef.current.contains(e.target)) {
        setShowCartDropdown(true);
      } else {
        setShowCartDropdown(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="items-center justify-between">
          <div className="cursor-pointer">
            <Dropdown className="relative" dropref={categoryRef}>
              <p className="font-regular flex items-center gap-x-2.5 text-sm text-black">
                <FaBars />
                <span className="hidden lg:inline-block">Sort by Category</span>
              </p>
              {showCategoryDropdown && (
                <div className="absolute top-9 z-10 w-[269px] bg-black">
                  <List className="font-regular text-[#979797]">
                    {categoryData.map((item, i) => (
                      <ListItem
                        className="border-b border-solid border-[#3f3f3f] px-5 py-3 text-sm duration-100 ease-in last:border-0 hover:px-6 hover:font-bold hover:text-white"
                        itemname={item.title}
                        href={item.link}
                      />
                    ))}
                  </List>
                </div>
              )}
            </Dropdown>
          </div>
          <div className="relative w-[65%] md:w-[600px]">
            <Search
              className="font-regular w-full px-5 py-4 text-sm outline-1 placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <FaSearch
              className="absolute right-4 top-4 cursor-pointer"
              size={17}
              fill="#262626"
            />
          </div>
          <div>
            <Flex className="items-center gap-x-4 lg:gap-x-8">
              <Dropdown className="relative" dropref={userRef}>
                <div className="flex cursor-pointer items-center">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>
                {showUserDropdown && (
                  <div className="absolute right-0 top-9 z-10 w-[200px] bg-black">
                    <List className="font-regular border border-solid border-[#f0f0f0] bg-white text-center text-black">
                      <ListItem
                        className="cursor-pointer border-b border-solid border-[#f0f0f0] px-5 py-3 text-sm duration-100 ease-in hover:bg-black hover:text-white"
                        itemname="My Account"
                      />
                      <ListItem
                        className="cursor-pointer px-5 py-3 text-sm duration-100 ease-in hover:bg-black hover:text-white"
                        itemname="Logout"
                      />
                    </List>
                  </div>
                )}
              </Dropdown>
              <div>
                <Dropdown className="relative" dropref={cartRef}>
                  <HiShoppingCart size={21} className="cursor-pointer" />
                  {showCartDropdown && (
                    <div className="absolute right-0 top-9 z-10 w-[360px] border border-solid border-[#f0f0f0]">
                      <div className="bg-[#f5f5f3] p-5">
                        <Flex className="justify-between">
                          <div className="bg-[#787878]">
                            <Image imgsrc="assets/cartimage.png" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="text-sm font-bold text-black">
                              Black Smart Watch
                            </h3>
                            <p className="mt-3 text-sm font-bold text-black">
                              $44.00
                            </p>
                          </div>
                          <div className="flex items-center justify-end">
                            <ImCross className="cursor-pointer" />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <h4 className="font-regular text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-bold text-black">$44.00</span>
                        </h4>
                        <Flex className="mt-3 justify-between">
                          <Link
                            to="#"
                            className="border border-solid border-black px-10 py-4 text-sm font-bold text-black duration-150 ease-in hover:bg-black hover:text-white"
                          >
                            View Cart
                          </Link>
                          <Link
                            to="#"
                            className="border border-solid border-black px-10 py-4 text-sm font-bold text-black duration-150 ease-in hover:bg-black hover:text-white"
                          >
                            Checkout
                          </Link>
                        </Flex>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
