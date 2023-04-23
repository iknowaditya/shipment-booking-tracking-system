import React from "react";
import { RiShipLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

function Load(props) {
  return (
    <Menu as="div" className="search-bar relative">
      <Menu.Button>
        <label htmlFor="origin" className="sr-only">
          Load
        </label>
        <div className="relative">
          <RiShipLine className="absolute top-1/2 transform -translate-y-1/2 left-2 w-5 h-5 text-gray-500" />
          <input
            id="load"
            type="text"
            placeholder={props.placeholder}
            className="search-bar__input bg-gray-100 font-primary rounded-md pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-500"
          />
        </div>
      </Menu.Button>
    </Menu>
  );
}

export default Load;
