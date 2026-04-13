import Handshake from '@/app/components/icons/Handshake';
import React from 'react';

const page = () => {
  return (
    <div className="p-6">
      <h2 className="flex items-center space-x-3">
        <div className="border-primary relative flex h-10 w-10 items-center justify-center rounded-full border-2">
          <Handshake className="fill-primary h-7 w-7" />
        </div>
        <span className="text-primary text-xl font-semibold">Diner de gala</span>
      </h2>
      <div className="mt-5"></div>
    </div>
  );
};

export default page;
