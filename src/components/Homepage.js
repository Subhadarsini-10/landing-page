// Homepage.js
import React from "react";
import { Bell, BellIcon, Eye, Graph, Logo } from "./icons";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <>
      <div className="lg:w-[60%] h-screen w-full lg:overflow-hidden overflow-auto">
        <div className="bg h-screen">
          <div className="flex flex-row gap-20 w-full px-10 py-4">
            {/* Section with Bell Icon */}
            <section>
              <BellIcon className="mb-4" />
              <div className="text-[#F2F2F2] text-3xl font-medium leading-10 w-[313px] text-shadow-md">
                Get notified when a highly correlated whale makes a move
              </div>
              <p className="w-[322px] text-base text-[#F2F2F2] opacity-70 leading-5 font-normal">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </section>

            {/* Section with Carousel */}
            <div className="carousel lg:flex hidden gap-7">
              {/* First Carousel Item */}
              <div className="w-[190px] h-[172px] bg-gradient-to-b from-[#FFFFFF] to-[#a9c3ff] rounded-lg">
                <div className="flex flex-row justify-between p-2">
                  <Bell />
                  Save
                </div>
                <div className="w-[140px] h-[51px] leading-4 font-medium p-2 mb-5">
                  We'll be sending notifications to you here
                </div>
                <input
                  className="p-2 w-[170px] m-2 rounded-md"
                  placeholder="hello@gmail.com"
                />
              </div>

              {/* Second Carousel Item */}
              <div className="w-[190px] h-[172px] bg-[#FFF] rounded-lg">
                <div className="p-2 mb-12">
                  <Graph />
                </div>
                <p className="leading-3 font-medium text-xs p-2">
                  Notify me when any wallets move more than
                </p>
                <div className="p-2">
                  <button className="border px-2 rounded-sm bg-slate-100">
                    $1000.00
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {/* Section with Eye Icon */}
            <div className="hidden lg:flex rounded-xl justify-between items-center lg:pr-20 pr-2">
              <div className="hidden lg:block image w-[335px] h-[256px] bg-cover"></div>
              <div className="flex flex-col lg:items-end items-start">
                <Eye />
                <h2 className="text-[#F2F2F2] text-3xl font-medium leading-10 w-[240px] text-right">
                  Watch what the whales are doing
                </h2>
                <p className="text-base w-[385px] text-[#F2F2F2] opacity-70 leading-5 font-normal lg:text-right text-center">
                  All whales are not equal. Know exactly what the whales
                  impacting YOUR portfolio are doing.
                </p>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="lg:text-right text-center mb-10">
              <h2 className="text-[#F2F2F2] text-3xl font-medium leading-10 pr-20">
                Testimonials
              </h2>
              <hr className="border-t border-[#969393] w-[80%] mt-2 mx-auto" />
            </div>
          </div>

          <div className="lg:flex lg:pl-0 pl-8 gap-10">
            <div className="pl-5 lg:block hidden h-[136px] mt-[70px]">
              <Logo />
            </div>

            <div className="h-[136px] w-[353px] bg-[#fff] rounded-xl mb-10 p-4 flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <h1 className="font-medium">Jack F</h1>
                <p className="text-xs text-[gray]">Ex Blackrock PM</p>
              </div>
              <p className="text-base font-medium leading-4">
                “Love how Loch integrates portfolio analytics and whale watching
                into one unified app.”
              </p>
            </div>
            <div className="h-[136px] w-[353px] bg-[#fff] rounded-xl mb-10 p-4 flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <h1 className="font-medium">Yash P</h1>
                <p className="text-xs text-[gray]">
                  Research, 3poch Crypto Hedge Fund
                </p>
              </div>
              <p className="text-base font-medium leading-4">
                “I use Loch everyday now. I don't think I could analyze crypto
                whale trends markets without it. I'm addicted!”
              </p>
            </div>
            <div className="lg:hidden h-[136px] w-[353px] bg-[#fff] rounded-xl mb-10 p-4 flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <h1 className="font-medium">Shiv S</h1>
                <p className="text-xs text-[gray]">Co-Founder Magik Labs</p>
              </div>
              <p className="text-base font-medium leading-4">
                “Managing my own portfolio is helpful and well designed. What’s
                really interesting is watching the whales though. No one else
                has made whale tracking so simple.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
