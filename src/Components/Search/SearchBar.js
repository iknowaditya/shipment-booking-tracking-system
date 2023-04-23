import React from "react";
import Origin from "./Origin";
import Destination from "./Destination";
import Date from "./Date";
import Load from "./Load";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const shipping = useCallback(() => {
    navigate("/shipping-details");
  }, [navigate]);

  return (
    <div
      className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1
    bg-white lg:bg-transparent lg:backdrop-blur rounded-lg mt-20 shadow-2xl"
    >
      <Origin placeholder="Origin, Port, City" />
      <Destination placeholder="Destination, Port, City" />
      <Date placeholder="13 April 2023" />
      <Load placeholder="Load" />
      <img
        className=" rounded-lg  px-2 border-color-black transition w-30% lg:max-w-[120px] h-10  flex justify-center items-center cursor-pointer text-lg"
        alt=""
        src="/enter.svg"
        onClick={shipping}
      />
    </div>
  );
}

export default SearchBar;

//py-3 rounded-lg  px-9 border-color-black transition w-30% lg:max-w-[162px] h-12  flex justify-center items-center cursor-pointer text-lg
