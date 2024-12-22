import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-black rounded-[30px] w-[1440px] h-[95%] flex overflow-hidden">
        <div className="w-[380px] h-full overflow-y-scroll scrollbar-none">
          <Sidebar />
        </div>
        <div className="bg-white w-full m-5 rounded-[30px] overflow-y-scroll scrollbar-none">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
