import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Menu } from "@headlessui/react";

function Origin(props) {
  return (
    <Menu as="div" className="search-bar relative">
      <Menu.Button>
        <label htmlFor="origin" className="sr-only">
          Origin
        </label>
        <div className="relative">
          <CiLocationOn className="absolute top-1/2 transform -translate-y-1/2 left-2 w-5 h-5 text-gray-500" />
          <input
            id="origin"
            type="text"
            placeholder={props.placeholder}
            className="search-bar__input bg-gray-100 rounded-md pl-10 pr-3 py-2 w-full font-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-500"
          />
        </div>
      </Menu.Button>
    </Menu>
  );
}

export default Origin;
