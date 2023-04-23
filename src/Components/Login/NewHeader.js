import React from "react";
import { Link } from "react-router-dom";

function NewHeader() {
  return (
    <div>
      <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center cursor-pointer">
          <div className="	font-semibold text-4xl  ">
            <span>
              Ship<span className="text-violet-800">mate.</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <img
              className="relative w-12 h-12 shrink-0 overflow-hidden"
              alt=""
              src="/doller.svg"
            />

            <Link className="bg-violet-500 hover:bg-violet-600 text-white px-5 py-3 font-primary rounded-lg transition cursor-pointer">
              Track Shipment
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NewHeader;
