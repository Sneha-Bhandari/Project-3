import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Subheader = () => {
  return (
    <div className='flex relative top-0 gap-12 items-center justify-between px-32 py-2 bg-gray-700'>
        <div className='flex gap-5  text-white  '>
       <div className='flex gap-1'>
        <h1 className='font-bold'>Phone:</h1>
       <h1 className='text-[#1de9b6] font-light'> +1 234 5678</h1>
       </div>
       <div className='flex gap-1'>
       <h1 className='font-bold'> Email:</h1>
       <h1 className='text-[#1de9b6] font-light'>info@yourdomain.com</h1> 
        </div> 
        </div>
       <div className='flex gap-4 justify-end text-[#1de9b6]'>
       <div><FaFacebookF /></div>
       <div><FaTwitter/></div>
    <div><FaInstagram/></div>
    <div><FaLinkedinIn/></div>

       </div>
    </div>
  )
}

export default Subheader
