import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-600 via-gray-500 to-gray-700 min-h-screen text-white flex flex-col">
      <NavBar />
      <main className="flex-grow w-full max-w-4xl px-6 sm:px-8 md:px-10 mx-auto mt-6 mb-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
