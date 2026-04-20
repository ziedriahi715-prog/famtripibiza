import Image from "next/image";
import React from "react";

const Column2 = () => {
  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Alize-AllianceMeeting.jpg"
          alt="Alizée - Alliance Meeting"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Alizée - <span className="font-bold">Alliance Meeting</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Christelle-OPA.jpg"
          alt="Christelle - OPA"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Christelle - <span className="font-bold">OPA</span>
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-square">
        <Image
          fill
          className="rounded-[20px] object-cover"
          src="/images/trombinoscope/Cynthia-IncentivosIbiza.jpg"
          alt="Cynthia - Incentivos Ibiza"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-[20px]">
          <p className="text-center text-sm">
            Cynthia - <span className="font-bold">Incentivos Ibiza</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Column2;
