import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "/src/assets/logo.svg";

function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div>
        <header className=" h-[7vh] md:h-[12vh] flex justify-between md:justify-between items-center md:mx-16 mx-3 z-[99] ">
          <img src={logo} alt="" />

          <nav className=" flex-row justify-center items-center hidden md:flex">
            <a
              href="#"
              className="text-[18px] mx-2 p-2 text-[#998f8f] nav-link"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[18px] mx-2 p-2 text-[#998f8f] nav-link"
            >
              About
            </a>
            <a
              href="#"
              className="text-[18px] mx-2 p-2 text-[#998f8f] nav-link"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-[18px] mx-2 p-2 text-[#998f8f] nav-link"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-[18px] mx-2 p-2 text-[#998f8f] nav-link"
            >
              Careers
            </a>
          </nav>

          <button className=" hidden md:flex rounded-full bg-gradient-to-r from-customHsl1 to-customHsl2 p-2 px-5 text-[#f3ecec] mx-2">
            Request Invite
          </button>
          {nav ? (
            <AiOutlineClose
              onClick={handleNav}
              size={20}
              className="z-[99] cursor-pointer md:hidden "
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNav}
              size={20}
              className="z-[99] cursor-pointer md:hidden"
            />
          )}
          {nav && (
            <div className="fixed w-[80%] h-[40%] bg-white right-14 top-20 rounded-lg flex flex-col justify-center items-center z-20">
              <a href="#" className="m-3 text-[18px]">
                Home
              </a>
              <a href="#" className="m-3 text-[18px]">
                About
              </a>
              <a href="#" className="m-3 text-[18px]">
                Contact
              </a>
              <a href="#" className="m-3 text-[18px]">
                Blog
              </a>
              <a href="#" className="m-3 text-[18px]">
                Careers
              </a>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}

export default Header;
