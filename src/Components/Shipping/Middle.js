import React from "react";
import Origin from "../Search/Origin";
import Destination from "../Search/Destination";
import Date from "../Search/Date";
import Load from "../Search/Load";

function NewSearch() {
  return (
    <div>
      <div
        className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1
    bg-white lg:bg-transparent lg:backdrop-blur rounded-lg mt-20 shadow-2xl"
      >
        <Origin placeholder="Delhi, 11003" />
        <Destination placeholder="Shanghai, 200080" />
        <Date placeholder="13 April 2023" />
        <Load placeholder="114,21KG - AIR                                                                                                   " />
        <img
          className=" rounded-lg  px-2 border-color-black transition w-30% lg:max-w-[120px] h-10  flex justify-center items-center cursor-pointer text-lg"
          alt=""
          src="/enter.svg"
        />
      </div>
    </div>
  );
}

export default NewSearch;
