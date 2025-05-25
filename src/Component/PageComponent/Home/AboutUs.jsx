import React from 'react'
import lap from "../../../assets/about1.jpg"
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdFormatPaint } from "react-icons/md";

const aboutdetails=[
  {logo:<FaUmbrellaBeach/>,topic:"Web Specialties", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.",button:"Learn More"},
  {logo:<MdFormatPaint/>,topic:"Intuitive Thinkers", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.",button:"Learn More"},

]
const AboutUs = () => {
  return (
    <div className='bg-white  h-lvh w-full flex '>
      <div className='flex mx-auto  pt-12 h-full justify-center items-center'>

      <div className='w-full h-full  flex flex-col gap-8 justify-start p-16 '>
      <h1 className='text-5xl font-poppins'>About Us</h1>
      <p className='w-full font-poppins text-base tracking-wide text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</p>
      <div className='flex w-full gap-2'>
        {aboutdetails.map((val,i)=>{
          return(
            <div key={i} className='flex flex-col gap-5'>
             
                <div className='text-gray-600 text-5xl'>{val.logo}</div>
                <div className='text-2xl text-gray-700 '>{val.topic}</div>
                <div className='font-light'>{val.description}</div>
                <div className='cursor-pointer text-teal-300 font-light'>{val.button}</div>
            
            </div>
          )
        })}
      </div>
      </div>


      <div className='w-full h-full flex justify-center items-start p-16 '>
      <img  className="w-8/10 h-9/11 object-cover" src={lap} alt="" />
      </div> 

      </div>
    </div>
  )
}

export default AboutUs
