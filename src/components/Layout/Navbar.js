import React from "react";
import { useEffect, useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaBarsStaggered } from "react-icons/fa6";
import Container from "./Container";
import { Logo } from "../../svg/Logo";
import { menuData } from "../../Data/menuData";

const Navbar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav className="py-7">
      <Container>
        <div className="py-2.5 lg:flex">
          <div className="w-full lg:w-3/12">
            <Logo />
          </div>
          <div className="w-full lg:w-9/12">
            <FaBarsStaggered
              onClick={() => setShow(!show)}
              className="absolute right-2.5 top-2.5 ml-auto block lg:hidden"
            />
            {show && (
              <List className="mt-5 font-dm text-sm font-normal lg:mt-0 lg:flex lg:justify-end lg:gap-x-10">
                {menuData.map((item, index) => (
                  <ListItem
                    key={index}
                    itemname={item.title}
                    href={item.link}
                    className="my-2 cursor-pointer hover:font-bold lg:my-0"
                  />
                ))}
              </List>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
