import Handshake from "@/app/components/icons/Handshake";
import { Partenaires } from "@/app/utils/data";
import Image from "next/image";
import React from "react";

const Parten = () => {
  return (
    <div className="p-6">
      <h2 className="flex items-center space-x-3">
        <div className="border-primary relative flex h-10 w-10 items-center justify-center rounded-full border-2">
          <Handshake className="fill-primary h-7 w-7" />
        </div>
        <span className="text-primary text-xl font-semibold">
          Les partenaires
        </span>
      </h2>
      <div className="mt-5">
        {Partenaires &&
          Partenaires.map((partenaire, i) => (
            <div key={i} className="mb-3 grid grid-cols-2 gap-3">
              <div
                key={i}
                className="border-accent flex items-center justify-center rounded-[20px] border p-3"
              >
                <div className="relative h-[104px] w-[95%]">
                  <Image
                    fill
                    src={partenaire.logo}
                    alt={partenaire.logo}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="border-accent flex items-center justify-center rounded-[20px] border p-3">
                <div className="relative flex h-[104px] w-[95%] flex-col items-center justify-center space-y-3">
                  <b className="text-xl">{partenaire.name}</b>
                  <p className="block text-center">{partenaire.role}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Parten;
