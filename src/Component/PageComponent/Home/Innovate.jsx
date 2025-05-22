import React from "react";
import { MdOutlineDone } from "react-icons/md";

const serviceData = [
  {
    id: "01",
    title: "Innovate",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
    items: ["Customer Experience", "Product Management", "Proof of Concept"],
  },
  {
    id: "02",
    title: "Create",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
    items: ["Web Design", "Branding", "Web & App Development"],
  },
  {
    id: "03",
    title: "Scale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
    items: ["Social Media", "Paid Campaigns", "Marketing & SEO"],
  },
];

const Innovate = () => {
  return (
    <div className="h-full w-full relative  bg-white py-20">
      <div className="flex gap-24 mx-32 mt-12 items-center justify-between text-start ">
        {serviceData.map((service, i) => {
          return (
            <div key={i} className="   relative">
              <div className="absolute top-0 left-0 transform -translate-x-1/2 text-8xl font-bold text-gray-100 z-0">
         
                 {service.id}
              </div>
              <div className="relative z-10 font-light">
                <h3 className="text-teal-500 text-3xl font-medium mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 text-justify  tracking-tight">{service.description}</p>
                <ul className="text-left  flex-col gap-2  flex">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 mb-2 ">
                    <div className="text-teal-400  text-xl "><MdOutlineDone/></div>
                    <div className="font-light">{item}</div>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Innovate;
