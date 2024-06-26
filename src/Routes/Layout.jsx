import React from "react";
import SideBar from "../composants/SideBar/SideBar";
import Trends from "../composants/Trends/Trends";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <SideBar />
         <Outlet />
         <Trends />
      </>
   );
};

export default Layout;