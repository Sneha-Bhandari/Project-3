import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer1";
import MainNav from "../Component/Navigation/MainNav";

import backgroundImage from "../assets/hero1.jpg";

const Layout = () => {
  return (
    <div>
      <div>
      <img
        className="fixed w-full h-full object-cover"
        src={backgroundImage}
        alt="Laptop background"
      />
        <MainNav />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
