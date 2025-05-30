import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hum1 from "../../../assets/human1.jpg";
import hum2 from "../../../assets/human2.jpg";
import hum3 from "../../../assets/human3.jpg"


const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
    name: "Robert Spears",
    image: hum1,
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
    name: "Jane Doe",
    image: hum2,
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
    name: "Jane Doe",
    image: hum3,
  },
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
    name: "Jane Doe",
    image: hum3,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <div className="h-full w-full flex items-center justify-center mx-auto py-16 bg-gray-100 ">
      <div className="flex flex-col items-center gap-8 h-full justify-start ">
      <div className="font-poppins text-5xl">Testimonials</div>
     
      <Carousel
        className=" flex w-1/2 h-fit"
        arrows={false}
        autoPlaySpeed={3000}
        infinite
        showDots
        keyBoardControl
        pauseOnHover
        swipeable
        draggable
        containerClass="container mx-auto"
        itemClass="px-4"
        responsive={responsive} 
      >
        {testimonials.map((t, index) => (
          <div key={index} className=" h-fit py-4 ">
            <p className="italic text-gray-700  text-2xl font-light tracking-wide  text-center w-full">“{t.quote}”</p>
            <div className="flex items-center justify-center gap-4 py-12 ">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="font-medium">{t.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
     
      </div>
    </div>
  );
};

export default Testimonials;
