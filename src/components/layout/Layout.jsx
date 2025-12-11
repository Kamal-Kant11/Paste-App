import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="bg-gray-600 min-h-screen text-white flex flex-col items-center pt-5">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
