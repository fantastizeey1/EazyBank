import React from "react";

const Main = () => {
  return (
    <div className=" font-sans h-[75vh] md:h-[90vh] bg-[#fafafa] w-[100vw]  ">
      <div className="  relative w-full h-full md:h-full  overflow-hidden ">
        <img
          src="./src/assets/bg-intro-desktop.svg"
          alt=""
          className="absolute -top-36 size-full  md:-top-40 md:-right-52 w-[70%]  md:h-[120%] hidden md:block"
        />
        <img
          src="./src/assets/bg-intro-mobile.svg"
          alt=""
          className="absolute -top-4    w-full   md:hidden"
        />
        <img
          src="./src/assets/image-mockups.png"
          className="absolute -top-32 md:-top-24 md:-right-[110px] md:h-[120%]   md:w-[50%]"
          alt=""
        />

        <div className="flex flex-col mt-[23em] md:mt-0 z-[99]  md:mx-[5vw] md:text-start md: md:ml-24  items-center  md:w-[40%]">
          <h1 className="font-extrabold text-center md:text-start mb-5 text-[42px] md:text-[60px] mt-3 md:pr-4 md:mb-4">
            Next generation digital banking
          </h1>
          <p className="text-[#998f8f] text-[18px] mb-6 text-center md:text-start  md:p-8 md:pl-0 md:pr-10">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="font-semibold w-52 rounded-full bg-gradient-to-r from-customHsl1 to-customHsl2 p-2 md:-ml-80 px-5 text-[#f3ecec] mx-2">
            Request Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
