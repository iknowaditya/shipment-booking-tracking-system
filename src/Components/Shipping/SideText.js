import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Cart from "./Cart";
import SecondCard from "./SecondCard";

function SideText() {
  return (
    <div>
      <div className="absolute items-start top-[540px] left-[50px] leading-[120%]">
        <b>{`3 Top Quote `}</b>
        <span>(6 in Total)</span>
      </div>
      <div className="absolute top-[525px] left-[381px] rounded-lg bg-slate-100 shadow-[21px_337px_95px_rgba(21,_31,_72,_0),_14px_216px_86px_rgba(21,_31,_72,_0.01),_8px_121px_73px_rgba(21,_31,_72,_0.05),_3px_54px_54px_rgba(21,_31,_72,_0.09),_1px_13px_30px_rgba(21,_31,_72,_0.1),_0px_0px_0px_rgba(21,_31,_72,_0.1)] w-[688px] h-[42px] text-justify from-neutral-50  text-gray-400">
        <div className="absolute top-[-3px] left-[2px] rounded-lg bg-white shadow-[4px_3px_10px_rgba(0,_0,_0,_0.1)] w-64 h-12" />
        <div className="absolute top-[13px] left-[56px] leading-[120%] text-violet-500">
          <b className=" relative right-7 ">{`Best Value `}</b>
          <span className="font-primary relative right-4 text-sm">
            5-5 days. $3,121
          </span>
        </div>
        <div className="absolute top-[13px] left-[272px] leading-[120%]">
          <b className=" font-primary text-sm ">{`Quickest `}</b>
          <span className="font-primary text-sm">5-5 days. $3,121</span>
        </div>
        <div className="absolute top-[13px] left-[478px] leading-[120%]">
          <b className="font-primary text-sm ">{`Cheapest `}</b>
          <span className="font-primary text-sm">5-5 days. $3,121</span>
        </div>
      </div>
      <div className="absolute items-start top-[600px] left-[50px] leading-[120%]">
        <b className="cursor-pointer">Filters</b>
        <div className="absolute cursor-pointer items-start text-3xl top-[0px] text-gray-500 left-[250px]">
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="absolute items-start top-[650px] left-[50px] leading-[120%]">
        <b className="cursor-pointer">Price</b>
        <div className="absolute cursor-pointer items-start text-3xl top-[0px] text-gray-500 left-[250px]">
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="absolute items-start top-[700px] left-[50px] leading-[120%]">
        <b className="cursor-pointer">Modes</b>
        <div className="absolute cursor-pointer items-start text-3xl top-[0px] text-gray-500 left-[250px]">
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="absolute items-start top-[750px] left-[50px] leading-[120%]">
        <b className="cursor-pointer">Seller</b>
        <div className="absolute cursor-pointer items-start text-3xl top-[0px] text-gray-500 left-[250px]">
          <RiArrowDropDownLine />
        </div>
      </div>
      <div>
        <Cart />
      </div>
      <div className=" relative top-[170px] left-[5]">
        <SecondCard />
      </div>
      <div className="relative top-[340px] left-[5]">
        <Cart />
      </div>
      <div className="relative top-[510px] left-[5]">
        <Cart />
      </div>
      <div className=" relative top-[680px] left-[5]">
        <SecondCard />
      </div>
      <div className="relative top-[850px] left-[5]">
        <Cart />
      </div>
      <div className="relative top-[1020px] left-[5]">
        <Cart />
      </div>
      <div>
        <img
          className="relative top-[842px] left-[1200px] w-[130px] cursor-pointer h-[154px] z-50"
          alt=""
          src="/ChatBot.svg"
        />
      </div>
    </div>
  );
}

export default SideText;
