import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer1";
import MainNav from "../Component/Navigation/MainNav";

import backgroundImage from "../assets/hero1.jpg";

const Layout = () => {
  return (
    <div>
    
      <img
        className="fixed w-full h-full md:object-cover object-cover opacity-90 -z-50 top-0 buttom-0"
        src={backgroundImage}
        alt="Laptop background"
      />
        <MainNav />
     
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
