import React from 'react'
import person1 from "../../../assets/per1.jpg"
import person2 from "../../../assets/per2.jpg"
import person3 from "../../../assets/person2.jpg"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const teamdetails=[
  {image:person1,name:"John Rooster",position:"Co-Founder, President", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",logos:[<FaFacebookF/>,<FaTwitter/>,<FaInstagram/>,<FaLinkedinIn/>]},
  {image:person2,name:"Tom Sharp",position:"Co-Founder, COO", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",logos:[<FaFacebookF/>,<FaTwitter/>,<FaInstagram/>,<FaLinkedinIn/>]},
  {image:person3,name:"Winston Hodson",position:"Marketing", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",logos:[<FaFacebookF/>,<FaTwitter/>,<FaInstagram/>,<FaLinkedinIn/>]}
]


const OurTeam = () => {
  return (
    <div className='h-full w-full bg-white py-24 '>
      <div className='flex flex-col gap-8 justify-center items-center  w-9/10 h-full mx-auto'>
        <h1 className='text-5xl font-poppins'>Our Team</h1>
        
        <div className='flex gap-8 '>
          {teamdetails.map((val,i)=>{
            return(
              <div key={i}>
                <div className='flex flex-col justify-center items-center gap-5 shadow-sm p-5 '>
                <div className='mb-8'> <img className='w-48 h-48 rounded-full' src={val.image} alt="" /></div> 
                <div className='text-sm text-gray-800'>{val.name}</div>
                <div className='text-sm uppercase text-gray-400 font-extralight'>{val.position}</div>
                <div className='text-center text-gray-700 font-light w-9/10'>{val.description}</div>
                <div className="flex gap-3">
    {val.logos.map((logo, index) => (
      <div
        key={index}
        className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white"
      >
        {logo}
      </div>
    ))}
  </div>
                </div>

              </div>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default OurTeam
