import React, { useEffect, useState, useRef } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Headitem = [
  { title: "Home", path: "/" },
  { title: "Work", path: "/Work" },
  { title: "Services", path: "/Services" },
  { title: "About", path: "/About" },
  { title: "Blog", path: "/Blog" },
  { title: "Contact", path: "/Contact" },
];
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className=" absolute bg-white z-50 left-0 right-0 top-10  h-fit md:px-32 py-6 ">
      <div className="flex  items-center justify-between">
        <div className="text-4xl px-2 md:px-0  font-poppins">Create.</div>
        <div className="md:flex hidden font-light md:gap-12 gap-2">
          {Headitem.map((val, i) => {
            return (
              <div key={i} className=" text-black font-sans">
                <NavLink
                  to={val.path}
                  className={({ isActive }) =>
                    isActive ? "  text-[#1de9b6]" : "text-black"
                  }
                  onClick={() => {
                    
                    window.scrollTo(0, 0); 
                  }}
                >
                  {" "}
                  {val.title}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="md:hidden">
          <button
            className="flex text-5xl text-black cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          ref={menuRef}
          className=" md:hidden absolute bg-gray-200  flex flex-col w-1/2 text-xl right-0 h-fit px-5 top-4   text-start"
        >
          <div className="text-right">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl cursor-pointer py-2"
            >
              <ImCross />
            </button>
          </div>
          {Headitem.map((val, i) => (
            <NavLink
              key={i}
              to={val.path}
              className={({ isActive }) =>
                `block py-2 text-lg font-light  ${
                  isActive ? "text-teal-300" : "text-black"
                } hover:text-teal-300`
              }
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0); 
              }}
            >
              {val.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
