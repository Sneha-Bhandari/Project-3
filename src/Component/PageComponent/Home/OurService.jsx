import React from "react";
import { FaUmbrellaBeach, FaCopy } from "react-icons/fa";
import { MdFormatPaint } from "react-icons/md";
import { IoIosKey } from "react-icons/io";

const servicedetail = [
  {
    logo: <FaUmbrellaBeach />,
    topic: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    button: "Learn More",
  },
  {
    logo: <MdFormatPaint />,
    topic: "eCommerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    button: "Learn More",
  },
  {
    logo: <IoIosKey />,
    topic: "Web Applications",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    button: "Learn More",
  },
  {
    logo: <FaCopy />,
    topic: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    button: "Learn More",
  },
  {
    logo: <IoIosKey />,
    topic: "Copy Writing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    button: "Learn More",
  },
  {
    logo: <MdFormatPaint />,
    topic: "Mobile Applications",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
    button: "Learn More",
  },
];

const OurService = () => {
  return (
    <div className="bg-white w-full h-screen py-8 px-8 border-b-1 border-gray-300 ">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-medium tracking-wide font-poppins mb-2">Our Services</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {servicedetail.map((val, i) => (
          <div key={i} className="flex flex-col items-start space-y-4 px-4 gap-12">

           <div className="flex gap-4">

            <div className=" text-teal-500 text-2xl bg-teal-200 h-fit w-fit rounded-full p-2">
              {val.logo}
            </div>
          <div className="flex  items-start gap-4 flex-col text-gray-600 font-poppins">
            <h3 className="text-xl tracking-wider font-medium ">{val.topic}</h3>

            <p className="text-gray-600 text-sm tracking-wide  ">{val.description}</p>

            <button className="text-teal-400 cursor-pointer text-base font-light ">
              {val.button}
            </button>
          </div>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
