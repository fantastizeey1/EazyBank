import React from "react";
import plane from "/src/assets/image-plane.jpg";
import restaurant from "/src/assets/image-restaurant.jpg";
import confetti from "/src/assets/image-confetti.jpg";
import currency from "/src/assets/image-currency.jpg";
import online from "/src/assets/icon-online.svg";
import budgeting from "/src/assets/icon-budgeting.svg";
import api from "/src/assets/icon-api.svg";
import onboarding from "/src/assets/icon-onboarding.svg";
function Design() {
  return (
    <div className="md:-mt-24 font-sans">
      <div className="bg-[#f3f4f6] ">
        <div className="md:ml-24 md:mr-24 md:w-[100%-144px] flex flex-col justify-center items-center md:justify-start md:items-start p-5 md:py-10 ">
          <div className="md:w-[50%] w-full  my-3 flex items-center md:items-start md:justify-start justify-center flex-col">
            <h2 className="md:my-4 text-[30px] flex items-center md:items-start md:justify-normal text-center md:text-start font-semibold">
              Why choose Easybank?
            </h2>
            <p className=" font-normal flex items-center p-2 md:p-4 text-center md:text-start text-[#9698a6]">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6">
            <div className="flex justify-center items-center text-center  md:justify-start md:text-start flex-col md:items-start">
              <img src={online} alt="" className="my-3 md:my-5" />
              <h3 className="my-3 md:mt-2 md:mb-2">Online Banking</h3>
              <p className="my-3 font-normal text-[#9698a6]">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="flex justify-center items-center text-center  md:justify-start md:text-start flex-col md:items-start">
              <img src={budgeting} alt="" className="my-3 md:my-5" />
              <h3 className="my-3 md:mt-2 md:mb-2">Simple Budgeting</h3>
              <p className="my-3 font-normal text-[#9698a6]">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="flex justify-center items-center text-center  md:justify-start md:text-start flex-col md:items-start">
              <img src={onboarding} alt="" className=" my-3 md:my-5" />
              <h3 className=" my-3 md:mt-2 md:mb-2">Fast Onboarding</h3>
              <p className="my-3 font-normal text-[#9698a6]">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="flex justify-center items-center text-center  md:justify-start md:text-start flex-col md:items-start">
              <img src={api} alt="" className="md:my-5 my-3" />
              <h3 className=" my-3 md:mt-2 md:mb-2">Open API</h3>
              <p className="my-3  font-normal text-[#9698a6]">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa]">
        <div className="md:ml-24 md:mr-24 md:w-[100%-192px] flex flex-col justify-center items-center md:justify-start md:items-start flex-wrap p-5 md:py-10">
          <h3 className="my-9 text-2xl flex items-center md:items-start font-semibold">
            Latest Articles
          </h3>
          <div className="flex flex-col md:flex-row  justify-between items-center mx-3 gap-6 md:gap-5">
            <div className=" rounded-lg overflow-clip bg-[white] flex flex-col justify-center items-center">
              <img src={currency} alt="" className="w-full h-40" />
              <div className="flex flex-col justify-center items-start p-7 md:p-3 md:pr-16">
                <p className="text-[10px] text-[#9698a6] my-2">
                  By Claire Robinson
                </p>
                <h4>Receive money in any currency with no fees</h4>
                <p className="text-[10px]  text-[#9698a6] mb-5 md:mb-0 my-2">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className=" rounded-lg overflow-clip bg-[white]">
              <img src={restaurant} alt="" className="w-full h-40" />
              <div className="flex flex-col justify-center items-start p-7 md:p-3 md:pr-16">
                <p className="text-[10px] text-[#9698a6] my-2">
                  By Wilson Hutton
                </p>
                <h4>Treat yourself without worrying about money</h4>
                <p className="text-[10px] text-[#9698a6] mb-5 md:mb-0 my-2">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div className=" rounded-lg overflow-clip bg-[white]">
              <img src={plane} alt="" className="w-full h-40" />
              <div className="flex flex-col justify-center items-start p-7 md:p-3 md:pr-16">
                <p className="text-[10px] text-[#9698a6] my-2">
                  By Wilson Hutton
                </p>
                <h4>Take your Easybank card wherever you go</h4>
                <p className="text-[10px] text-[#9698a6] mb-5 md:mb-0 my-2">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
            <div className=" rounded-lg overflow-clip bg-[white]">
              <img src={confetti} alt="" className="w-full h-40" />
              <div className="flex flex-col justify-center mb-5 md:mb-0 items-start p-7 md:p-3 md:pr-16">
                <p className="text-[10px] my-2 text-[#9698a6]">
                  By Claire Robinson
                </p>
                <h4>Our invite-only Beta accounts are now live!</h4>
                <p className="text-[10px] text-[#9698a6] mb-5 md:mb-0 my-2">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
