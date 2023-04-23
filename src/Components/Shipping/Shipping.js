import React from "react";
import NewHeader from "../Login/NewHeader";
import Main from "./Main";
import Middle from "./Middle";
import SideText from "./SideText";

function Shipping() {
  return (
    <div>
      <NewHeader />

      <Main />
      <Middle />
      <hr className="w-full absolute  top-[450px] h-1 mx-auto my-1 border-0 rounded md:my-8 bg-gray-200" />
      <SideText />
    </div>
  );
}

export default Shipping;
