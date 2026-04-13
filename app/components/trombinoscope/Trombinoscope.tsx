import React from "react";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import PersonCard from "./PersonCard";
import { TrombinoscopeData } from "@/app/utils/data";

const Trombinoscope = () => {
  return (
    <>
      <Navbar text="Trombinoscope" />

      <div className="px-2 sm:px-4 mt-4 sm:mt-6">
        {/* Mobile: Display row by row */}
        <div className="block lg:hidden space-y-4">
          {TrombinoscopeData.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((person, personIndex) => (
                <div key={personIndex} className="mb-4">
                  <PersonCard person={person} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop: Display in grid columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4">
          {TrombinoscopeData[0].map((_, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {TrombinoscopeData.map(
                (row, rowIndex) =>
                  row[colIndex] && (
                    <PersonCard key={rowIndex} person={row[colIndex]} />
                  )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trombinoscope;
