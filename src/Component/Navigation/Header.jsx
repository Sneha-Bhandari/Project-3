import React from "react";
import {  NavLink } from "react-router-dom";

const Headitem= [
{title:"Home", path:"/"},
{title:"Work", path:"/Work"},
{title:"Services", path:"/Services"},
{title:"About", path:"/About"},
{title:"Blog", path:"/Blog"},
{title:"Contact", path:"/Contact"}


]
const Header = () => {
  return (
    <div className=" absolute bg-white z-50 left-0 right-0 top-10  h-fit md:px-32 py-6 ">
    <div className="flex  items-center justify-between">
      <div className="text-4xl px-2 md:px-0  font-poppins">Create.</div>
      <div className="md:flex hidden font-light md:gap-12 gap-2">
        {Headitem.map((val,i)=>{
            return(
                <div key={i} className=" text-black font-sans">
                  <NavLink to={val.path}
                  className={({ isActive }) =>
                  isActive ? "  text-[#1de9b6]" : "text-black"
                } > {val.title}</NavLink>
                </div>
            )
        })}
      </div>
    </div>
    </div>
  );
};

export default Header;
