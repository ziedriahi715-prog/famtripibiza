import Image from "next/image";
import React from "react";

const Column4 = () => {
  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Sigolene-Azoka.jpg"
          alt="Sigolène - Azoka"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Sigolène - <span className="font-bold">Azoka</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Lisa-XXL-Happyness"
          alt="Lisa - XXL Happyness"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Lisa - <span className="font-bold">XXL Happyness</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover object-top"
          src="/images/trombinoscope/Herve-TheMICEExperts.jpg"
          alt="Hervé - The MICE Experts"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Hervé - <span className="font-bold">The MICE Experts</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Column4;
