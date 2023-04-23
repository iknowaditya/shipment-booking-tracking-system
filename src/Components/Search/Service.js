import React from "react";
import {
  faShip,
  faBriefcase,
  faShoppingBag,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import ServiceData from "./ServiceData";

function Service() {
  return (
    <div>
      <div>
        <h1 className="font-primary text-3xl font-semibold text-center mt-20">
          Services
        </h1>
      </div>
      <div className="mt-20 flex justify-between font-primary text-start font-medium">
        <ServiceData
          icon={faShip}
          heading="Freight Services"
          description="Open new Opportunities to grow your business. Enter new markets and discover new continents, We are with you, door-to-door."
        />
        <ServiceData
          icon={faBriefcase}
          heading="Business Services"
          description="We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level."
        />
        <ServiceData
          icon={faShoppingBag}
          heading="Shopping logistics"
          description="Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs."
        />
        <ServiceData
          icon={faHeadset}
          heading="24/7 Support"
          description="Receive support from our experts all over the world at every stage of the process, 24/7."
        />
      </div>
    </div>
  );
}

export default Service;
