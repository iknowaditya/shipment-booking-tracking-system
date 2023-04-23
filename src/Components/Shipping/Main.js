import React from "react";
import { RiShipLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

function Main() {
  return (
    <>
      <Menu as="div" className="flex ml-20 h-20 items-center">
        <Menu.Button>
          <label htmlFor="origin" className="sr-only">
            Load
          </label>
          <div>
            <div className="  flex flex-col p-5 box-border font-primary items-center justify-center text-white right-[950px] absolute  w-3.5 h-3.5 bg-gray-400  rounded-full">
              <b>1</b>
            </div>
            <hr className="w-[160px] absolute right-[790px] top-[144px] h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-300" />
          </div>
          <div>
            <div className="  flex flex-col p-5 box-border font-primary  items-center justify-center text-white right-[750px] absolute  w-3.5 h-3.5 bg-gray-400  rounded-full">
              <b>2</b>
            </div>
            <hr className="w-[160px] absolute right-[590px] top-[144px] h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-300" />
          </div>
          <div>
            <div className="  flex flex-col p-5 box-border items-center font-primary justify-center text-white right-[550px] absolute  w-3.5 h-3.5 bg-gray-400  rounded-full">
              <b>3</b>
            </div>
            <hr className="w-[160px] absolute right-[390px] top-[144px] h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-300" />
          </div>
          <div>
            <div className="  flex flex-col p-5 box-border items-center font-primary justify-center text-white right-[350px] absolute  w-3.5 h-3.5 bg-gray-400  rounded-full">
              <b></b>
            </div>
            {/* <hr className="w-[160px] absolute right-[790px] top-[167px] h-1 mx-auto my-4 border-0 rounded md:my-10 bg-gray-300" /> */}
          </div>

          <div className="relative">
            <RiShipLine className="absolute top-1/2 transform -translate-y-1/2 left-2 w-5 h-5 text-gray-500" />

            <input
              id="load"
              type="text"
              placeholder="Load"
              className="search-bar__input bg-gray-100 rounded-md pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-500"
            />
          </div>
        </Menu.Button>
      </Menu>

      <div className=" flex-col justify-center items-center ml-[350px] font-primary font-semi text-black">
        Search
        <span className="ml-[65px] mt-0 font-primary  text-black">
          Recommended Services
        </span>
        <span className="ml-[90px] mt-0 font-primary  text-black">Result</span>
        <span className="ml-[140px]  mt-0 font-primary  text-gray-400">
          Booking
        </span>
      </div>
    </>
  );
}

export default Main;
