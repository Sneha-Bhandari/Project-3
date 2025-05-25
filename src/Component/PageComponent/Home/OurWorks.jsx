import React from "react";
import leafImg from "../../../assets/leaf.jpg";
import fourImg from "../../../assets/4.jpg";
import laptopImg from "../../../assets/Laptop.jpeg";

const images = [leafImg, fourImg, leafImg, leafImg, leafImg, laptopImg];

const details = [
  { title: "Bonzai Tree", type: "Website" },
  { title: "Simple Woman", type: "Branding" },
  { title: "Fruits", type: "Website" },
  { title: "Digital Material", type: "Web Application" },
  { title: "Handy Food", type: "Branding" },
  { title: "Cat with Cup", type: "Website" },
];

const OurWorks = () => {
  return (
    <div className="bg-white  w-full h-full">
      <div className="flex flex-col gap-10 justify-center items-center py-6">
        <h1 className="text-5xl tracking-wider font-serif">Our Works</h1>
        <p className="w-1/2 text-center font-sans text-gray-700 font-light tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          itaque neque, delectus odio iure explicabo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative cursor-pointer group overflow-hidden"
          >
            <img
              src={img}
              alt=""
              className="w-full h-96 object-cover transform transition-transform duration-700 group-hover:scale-125"
            />
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-900 ease-in-out transform translate-y-4 group-hover:translate-y-0">
              <div className="text-2xl font-semibold">{details[i]?.title}</div>
              <div className="text-sm mt-1 tracking-widest uppercase">
                {details[i]?.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
