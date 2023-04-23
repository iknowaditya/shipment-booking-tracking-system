import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceData(props) {
  return (
    <div className="rounded-2xl bg-white shadow-[0px_228px_64px_rgba(0,_0,_0,_0),_0px_146px_58px_rgba(0,_0,_0,_0.01),_0px_82px_49px_rgba(0,_0,_0,_0.05),_0px_36px_36px_rgba(0,_0,_0,_0.09),_0px_9px_20px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] flex flex-col py-7 px-6 items-start justify-center gap-[20px]">
      <div className="w-64 p-4 mx-auto  ">
        <div className="flex items-center justify-center mb-2">
          <div className="flex items-center justify-center mr-2">
            <FontAwesomeIcon icon={props.icon} style={{ color: "#1acbae" }} />
          </div>

          <div className="flex items-center justify-center ml-2">
            <h1 className="text-lg font-bold font-primary text-center justify-center">
              {props.heading}
            </h1>
          </div>
        </div>
        <div className="relative right-[20px]  box-border w-[277.7px] h-[0.7px] shrink-0 border-t-[0.7px] border-solid border-darkgray-100"></div>
        <div className="flex items-center justify-center mt-2">
          <p className="text-gray-600 text-start">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceData;
