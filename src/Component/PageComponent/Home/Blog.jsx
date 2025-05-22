import React from "react";
import imge1 from "../../../assets/img1.jpg"
import imge2 from  "../../../assets/img2.jpg"

const blogdetails = [
  {
    image: imge1,
    title: "Create Beautiful Website In Less Than An Hour",
    details: [{ name: "Ham Brook", date: " Jan 18, 2019", type: " News" }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    click: "Continue Reading...",
  },

  {
    image: imge2,
    title: "Create Beautiful Website In Less Than An Hour",
    details: [{ name: "James Phelps", date: " Jan 18, 2019", type: " News" }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    click: "Continue Reading...",
  },

  {
    image: imge1,
    title: "Create Beautiful Website In Less Than An Hour",
    details: [{ name: "James Phelps", date: " Jan 18, 2019", type: " News" }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.",
    click: "Continue Reading...",
  },
];

const Blog = () => {
  return (
    <div className="bg-white relative w-full h-full py-24 border-t-1 border-gray-200 ">
      <div className="flex flex-col gap-10 justify-center w-9/10 mx-auto items-center py-6">
        <h1 className="text-5xl tracking-wider font-serif">Blog</h1>
        <div className="flex gap-8 ">
          {blogdetails.map((val, i) => {
            return (
              <div key={i} className="flex flex-col gap-4 mt-8 items-start">
                <div className="h-full w-full">
                  <img
                    className="w-full h-86 object-cover"
                    src={val.image}
                    alt="Imagess"
                  />
                </div>
                <div className="font-poppins text-xl text-teal-300 font-medium mt-4">
                  {val.title}
                </div>
                <div>
                  {val.details.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="flex text-sm  gap-4 font-light"
                      >
                        <h1 className="text-gray-400">{value.name} </h1>
                        <span className="w-1 h-1 rounded-full mt-2 bg-gray-400"></span>
                        <h1 className="text-gray-400">{value.date}</h1>
                        <span className="w-1 h-1 rounded-full mt-2 bg-gray-400"></span>
                        <h1 className="text-teal-300">{value.type}</h1>
                      </div>
                    );
                  })}
                </div>
                <div className="flex text-base text-gray-700 font-light">
                  {val.description}
                </div>
                <button className="text-teal-300 font-light ">{val.click}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
