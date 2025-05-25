import React from "react";
import images from "../../../assets/about1.jpg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdFormatPaint } from "react-icons/md";
import { IoIosKey } from "react-icons/io";
import { FaCopy } from "react-icons/fa";

const detailing = [
  {
    icon: <FaUmbrellaBeach />,
    topic: "Strategy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
    button: "Read More",
  },

  {
    icon: <MdFormatPaint />,
    topic: "Art Direction",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
    button: "Read More",
  },

  {
    icon: <IoIosKey />,
    topic: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
    button: "Read More",
  },

  {
    icon: <FaCopy />,
    topic: "Copywriting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
    button: "Read More",
  },
];
const Strategy = () => {
  return (
    <div className="bg-white h-screen w-full  flex ">
      <div className="flex bg-black items-center justify-center mx-10 my-auto w-full  h-2/3  ">
        <div className="text-white   w-9/12 p-8  h-full">
          <img
            className="w-auto h-full object-cover"
            src={images}
            alt="Image"
          />
        </div>
        <div className="grid grid-cols-2 gap-2  p-8 m-4">
          {detailing.map((val, i) => (
            <div key={i} className="flex flex-col gap-3 text-justify font-poppins">
              <div className="text-2xl text-white flex gap-2">{val.icon}
              <div className="font-medium text-lg text-white">
                {val.topic}
              </div>
              </div>
              <div className="text-sm text-gray-600 w-2/3">{val.description}</div>
              <button className="underline cursor-pointer text-white text-sm text-start">
                {val.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strategy;
