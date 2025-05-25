import React from 'react'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const Forms = [
  {
    name: "FirstName",
    type: "text",
    placeholder: "",
  },
  
    {
      name: "LastName",
      type: "text",
      placeholder: "",
    },
    
  {
    name: "Email",
    type: "email",
    placeholder: "",
  },
  
    {
      name: "Subject",
      type: "text",
      placeholder: "",
    },
    {
      name:"Message",
      type:"textarea",
      placeholder:"Write your notes or question here..."
    }
  
];

const Schemas = yup.object().shape({
  FirstName: yup.string().required("firstname is required!!"),
  LastName: yup.string().required("lastname is required!!"),
 
  Subject: yup.string().required("Subject is required!!"),
  Message: yup.string().required("message is required!!"),


  Email: yup
    .string()
    .email("please provide a valid  email")
    .required("please enter your email"),
  
});


const ContactUs = () => {
  return (
    <div className='bg-gray-50  h-full w-full'>
      <div className='flex flex-col gap-8 mx-auto items-center justify-center py-20 h-full w-full  bg-gray-100 '>
       <h1 className='text-5xl font-poppins mb-12' >Contact Us</h1>
        <div className='w-full h-full  flex justify-center items-start mx-auto   gap-12 px-20'>
          <div className=' w-9/12 h-fit flex flex-col p-8 gap-4  bg-white'>
            <h1 className='font-poppins text-2xl'>Contact Form</h1>
            <Formik
          className=""
          initialValues={{
            FirstName: "",
            LastName:"",           
            Email: "",
            Subject:"",
            Message:"" 
          }}
          validationSchema={Schemas}
          onSubmit={(values) => {
            console.log(values);     
          }}
        >
         {({setFieldValue,values})=>{
          return(
            <Form className="   gap-4 p-2 flex  flex-col ">
            
            {Forms.map((val, i) => {
              return (
                <div key={i} className="flex flex-col font-poppins text-base font-light gap-1  ">
                  {val.name}
                  <Field

                  as={val.type === "textarea" ? "textarea" : "input"}
                  className={`w-full border border-gray-300 rounded-3xl p-2 focus:outline-none focus:ring-2 focus:ring-teal-300 ${
                    val.type === "textarea" ? "min-h-[150px]" : "" 
                  }`  
                 }
                    name={val.name}
                    type={val.type !== "textarea" ? val.type : undefined}
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
            <div className="flex items-center  mx-2 my-2">
              <button
                className="text-white uppercase  bg-teal-300 font-light text-xs rounded-3xl p-4 cursor-pointer"
                type="submit"
              >
                Send Message
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
