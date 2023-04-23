import React from "react";
import LogInNavbar from "./NewHeader";
import Hero from "../Search/Hero";
import SearchBar from "../Search/SearchBar";
import Service from "../Search/Service";
import Bot from "../Search/Bot";

function LoggedIn() {
  return (
    <div>
      <img
        className="absolute top-[2px] left-[0px] object-cover w-[1440px] h-[1050px] overflow-hidden"
        alt=""
        src="/water-waves.svg"
      />
      <div className="relative bg-primary-color w-full h-[1024px] overflow-hidden text-left text-23xl text-black font-primary-semi-bold">
        <LogInNavbar />
        <Hero />
        <SearchBar />
        <Service />
        <Bot />
      </div>
    </div>
  );
}

export default LoggedIn;
