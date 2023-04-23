import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import Service from "./Service";
import Bot from "./Bot";

function SearchForm() {
  return (
    <>
      <img
        className="absolute top-[2px] left-[0px] object-cover w-[1440px] h-[1050px] overflow-hidden"
        alt=""
        src="/water-waves.svg"
      />
      <div className="relative bg-primary-color w-full h-[1024px] overflow-hidden text-left text-23xl text-black font-title02-semi-bold">
        <Navbar />
        <Hero />
        <SearchBar />
        <Service />

        <Bot />
      </div>
    </>
  );
}

export default SearchForm;
