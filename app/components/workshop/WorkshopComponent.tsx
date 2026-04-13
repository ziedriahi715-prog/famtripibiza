import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import Map from "../icons/Map";

const WorkshopComponent = () => {
  return (
    <>
      <Navbar text="Carte" />

      <Image
        src="/images/map.jpg"
        alt="Carte de Ibiza"
        width={1000}
        height={1000}
        className="rounded-lg shadow-lg"
      />
    </>
  );
};

export default WorkshopComponent;
