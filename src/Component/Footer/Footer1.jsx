import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const footfeature = [
  { title: "About Us", path: "/About" },
  { title: "Services", path: "/Services" },
  { title: "Testimonials", path: "/Testimonials" },
  { title: "Contact Us", path: "/Contact" },
];

const logos = [
  <FaFacebookF />,
  <FaInstagram />,
  <FaLinkedinIn />,
  <FaTwitter />,
];
const Footer1 = () => {
  return (
    <div className="relative bg-[#4D4D4D] h-full w-full">
      <div className="flex flex-col h-full w-full mx-auto px-20 ">
        <div className="flex h-full w-full  justify-between py-28 items-between gap-14 mx-auto ">
          <div className="flex flex-col w-full h-full gap-4  ">
            <h1 className="text-white text-base">About Us</h1>
            <p className="text-gray-400 font-light flex  text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
              veritatis aliquam.
            </p>
          </div>
          <div className="flex flex-col w-full h-full gap-4 items-start ml-24 ">
            <h1 className="text-white text-base  ">Features</h1>
            <div className=" flex flex-col gap-2 text-gray-400 ">
              {footfeature.map((val, i) => {
                return <div key={i}><Link to={val.path} rel="stylesheet" href="">{val.title}</Link></div>;
              })}
            </div>
          </div>
          <div className="flex flex-col w-full h-full gap-4 ">
            <h1 className="text-white text-base">Follow Us</h1>
            <div className="flex gap-8 text-gray-400">
              {logos.map((val, i) => {
                return <div key={i}>{val}</div>;
              })}
            </div>
          </div>
          <div className="flex flex-col w-full h-full gap-4">
            <h1 className="text-white text-base">Subscribe Newsletter</h1>
            <div className="flex  ">
              <input
                className="border-gray-500 border p-2 rounded-l-full placeholder-gray-400  text-white"
                type="email"
                name="Email"
                placeholder="Enter Email"
              />
              <button className="bg-teal-300 border-gray-500 border-1 p-2 text-white rounded-r-full">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="h-fit w-full flex items-center justify-center pt-12 pb-32 border-t-1 border-gray-500 text-gray-300 ">
          {" "}
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <span> ❤️ </span> by Sneha Bhandari
        </div>
      </div>
    </div>
  );
};

export default Footer1;
