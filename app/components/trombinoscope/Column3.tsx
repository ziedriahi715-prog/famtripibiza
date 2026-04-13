import Image from "next/image";
import React from "react";

const Column3 = () => {
  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Laetitia.jpg"
          alt="Laetitia - Amedida"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Laetitia - <span className="font-bold">Amedida</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Elodie-WMH.jpg"
          alt="Elodie - WMH"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Elodie - <span className="font-bold">WMH</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Marlene-TheMICEExperts.jpg"
          alt="Marlene - The MICE Experts"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Marlene - <span className="font-bold">The MICE Experts</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Column3;
