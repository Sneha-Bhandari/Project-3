import React from 'react'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const Forms = [
  {
    name: "firstName",
    type: "text",
    placeholder: "",
  },
  
    {
      name: "lastName",
      type: "text",
      placeholder: "",
    },
    
  {
    name: "email",
    type: "email",
    placeholder: "",
  },
  
    {
      name: "subject",
      type: "text",
      placeholder: "",
    },
    {
      name:"message",
      type:"textarea",
      placeholder:"Write your notes or question here..."
    }
  
];

const Schemas = yup.object().shape({
  firstName: yup.string().required("firstname is required!!"),
  lastName: yup.string().required("lastname is required!!"),
 
  subject: yup.string().required("Subject is required!!"),
  message: yup.string().required("message is required!!"),


  email: yup
    .string()
    .email("please provide a valid  email")
    .required("please enter your email"),
  
});


const ContactUs = () => {
  return (
    <div className='bg-gray-50 relative h-lvh w-full'>
      <div className='flex flex-col gap-8 mx-auto items-center justify-center py-20 h-full w-full  bg-gray-100 '>
       <h1 className='text-5xl font-poppins mb-12' >Contact Us</h1>
        <div className='w-full h-full  flex justify-center items-start mx-auto  gap-12 px-20'>
          <div className=' w-9/12 h-fit flex flex-col p-8 gap-4 bg-white'>
            <h1 className='font-poppins text-2xl'>Contact Form</h1>
            <Formik
          className=""
          initimessalValues={{
            firstName: "",
            lastName:"",           
            email: "",
            subject:"",
            message:"" 
          }}
          validationSchema={Schemas}
          onSubmit={(values) => {
            console.log(values);     
          }}
        >
         {({setFieldValue,values})=>{
          return(
            <Form className=" bg-gray-200  flex  flex-col ">
            
            {Forms.map((val, i) => {
              return (
                <div key={i} className="flex flex-col ">
                  {val.name}
                  <Field
                    className="border-1 "
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                  />
                  <ErrorMessage
                    name={val.name}
                    component={"div"}
                    className="text-red-700 px-3"
                  />
                </div>
              );
            })}
            <div className="flex items-center justify-center mx-2 my-2">
              <button
                className=" "
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
          )
         }}
        </Formik>
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
