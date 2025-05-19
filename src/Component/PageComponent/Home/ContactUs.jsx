import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-gray-50 relative h-lvh w-full'>
      <div className='flex flex-col gap-8 mx-auto items-center justify-center py-20 h-full w-full  bg-gray-100 '>
       <h1 className='text-5xl font-poppins mb-12' >Contact Us</h1>
        <div className='w-full h-full  flex justify-center items-start mx-auto  gap-12 px-20'>
          <div className=' w-9/12 h-fit flex flex-col p-8 gap-4 bg-white'>
            <h1 className='font-poppins text-2xl'>Contact Form</h1>
          </div>
          <div className=' w-9/17 h-fit flex flex-col p-5 gap-4 bg-white'>

            <div className='flex flex-col gap-2'>
            <h1 className='text-base text-gray-800 font-semibold'>Address</h1>
            <p className='font-light text-gray-600'>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>

            <div className='flex flex-col gap-2'>
            <h1 className='text-base text-gray-800 font-semibold'>Phone</h1>
            <h1 className='text-teal-300'>+1 232 3235 324</h1>
            </div>

            <div className='flex flex-col gap-2'>
            <h1  className='text-base text-gray-800 font-semibold'>Email Address</h1>
            <h1 className='text-teal-300'>youremail@domain.com</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs
