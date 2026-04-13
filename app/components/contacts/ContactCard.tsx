import React from "react";

const ContactCard = ({
  title,
  content1,
  content2,
}: {
  title: string;
  content1: string;
  content2: string;
}) => {
  return (
    <div className="bg-white m-6 border-2  border-primary rounded-lg p-6 max-w-2xl ">
      <h2 className="text-[#6D9161] text-xl font-semibold mb-4 text-center">
        {title}
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="text-gray-800 font-medium mr-2">•</span>
          <span className="text-gray-800 font-medium">{content1}</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-800 font-medium mr-2">•</span>
          <span className="text-gray-800 font-medium">{content2}</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
