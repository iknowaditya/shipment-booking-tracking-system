import React from "react";

function Cart() {
  return (
    <div className="">
      <div className="p-14 w-[791px] h-[144px] m-[150px]  absolute right-[20px] grid grid-cols-1 border-solid border-radi bg-gray-100 rounded-xl  shadow-gray-100 md:shadow-gray-500 lg:shadow-gray-900">
        <div className="rounded-xl absolute top-4 left-[20px] bg-green-300 w-[115px]  shrink-0 flex flex-row p-2  font-primary box-border items-center justify-center gap-[10px]">
          <img
            className="relative w-[9px] h-[9px] shrink-0"
            alt=""
            src="/bestvalue.svg"
          />
          <div className="relative leading-[120%] text-sm font-primary">
            Best Value
          </div>
        </div>
        <div className="flex flex-row absolute top-6 left-[160px] justify-start gap-[10px] text-sm ">
          <div className="relative leading-[120%] text-red-600">Express</div>
          <div className="relative box-border w-px h-[17px] shrink-0 border-r-[1px] border-solid border-darkgray-200" />
          <div className="relative text-2xs leading-[120%] text-dimgray-200">
            Est. 5 days
          </div>
        </div>
        <div className="flex flex-row absolute top-[70px] left-[20px] items-center justify-start gap-[7px] text-sm text-gray-600">
          <div className="flex flex-row items-center justify-center gap-[3px]">
            <img
              className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
              alt=""
              src="/1.svg"
            />
            <div className="relative font-primary leading-[120%]">
              110003, Delhi
            </div>
          </div>
          <div className="relative box-border w-[25px] h-px shrink-0 border-t-[1px] border-solid border-dimgray-200" />
          <img
            className="relative w-4 h-4 shrink-0 overflow-hidden"
            alt=""
            src="/2.svg"
          />
          <div className="relative box-border w-[25px] h-px shrink-0 border-t-[1px] border-solid border-dimgray-200" />
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img
              className="relative w-[17px] h-[17px] shrink-0 overflow-hidden"
              alt=""
              src="/3.svg"
            />
            <div className="relative font-primary leading-[120%]">
              200080, Shanghai
            </div>
          </div>
        </div>
        <div className="flex flex-row absolute top-[110px] left-[20px] items-center justify-start gap-[14px] text-gray-600">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-5 h-[15px] shrink-0 overflow-hidden object-cover"
              alt=""
              src="/ship.png"
            />
            <div className="relative font-primary text-sm leading-[120%]">
              Primetime Worldwide
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <img
              className="relative w-[12.5px] h-[12.4px] shrink-0"
              alt=""
              src="/4.svg"
            />
            <img
              className="relative w-[12.5px] h-[12.4px] shrink-0"
              alt=""
              src="/4.svg"
            />
            <img
              className="relative w-[12.5px] h-[12.4px] shrink-0"
              alt=""
              src="/4.svg"
            />
            <img
              className="relative w-[12.5px] h-[12.4px] shrink-0"
              alt=""
              src="/4.svg"
            />
            <img
              className="relative w-[13.5px] h-[13.4px] shrink-0"
              alt=""
              src="/6.svg"
            />
          </div>
        </div>
        <div className="absolute top-[17.5px] left-[647.5px] box-border w-px h-[110px] border-r-[1px] border-solid border-darkgray-300" />
        <div className="absolute top-[24px] left-[660px] flex flex-col items-center justify-start gap-[14px] text-lg">
          <b className="relative leading-[120%]">
            <span className="text-[19px]">$ 3,982.</span>
            <span className="text-xs font-black">63</span>
          </b>
          <div
            className="flex flex-col items-center justify-start gap-[7px] cursor-pointer text-base text-white"
            //onClick={onFrameContainer15Click}
          >
            <div className="rounded-xl bg-violet-600 w-[101px] flex flex-row py-2.5 px-[34px] box-border items-center justify-center">
              <div className="relative leading-[120%]">Select</div>
            </div>
            <div className="relative text-2xs font-primary [text-decoration:underline] leading-[120%] text-gray-600">
              View details
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[200px] left-[20px]"></div>
    </div>
  );
}

export default Cart;
