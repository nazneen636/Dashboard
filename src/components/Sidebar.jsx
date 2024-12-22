import React, { useState } from "react";
import profile from "../assets/profile.png";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const menuBar = [
  {
    name: "Dashboard",
    to: "/dashboard",
    arrow: (
      <MdOutlineKeyboardArrowRight className="text-white text-xl opacity-50" />
    ),
    subMenu: ["Menu1", "Menu2", "Menu3"],
  },
  {
    name: "Expenses",
    to: "/",
    arrow: (
      <MdOutlineKeyboardArrowRight className="text-white text-xl opacity-50" />
    ),
    subMenu: ["Menu1", "Menu2"],
  },
  {
    name: "Wallets",
    to: "/wallets",
    arrow: (
      <MdOutlineKeyboardArrowRight className="text-white text-xl opacity-50" />
    ),
    subMenu: ["Menu1"],
  },
  {
    name: "Summary",
    to: "/summary",
  },
  {
    name: "Accounts",
    to: "/account",
  },
  {
    name: "Settings",
    to: "/settings",
  },
];

const Sidebar = () => {
  // let [isActive, setIsActive] = useState(null);
  const location = useLocation();
  return (
    <div className="w-[380px] px-20 py-[65px] text-white">
      <div className="top">
        <div className="user relative w-[72px]">
          <div className="w-[29px] h-[29px] flex items-center justify-center rounded-full bg-red-600 text-white absolute -right-2 -top-2">
            <span>4</span>
          </div>
          <img src={profile} alt="" className="rounded-lg" />
        </div>
        <h2 className="text-white font-semibold text-[30px]">Samantha</h2>
        <p className="opacity-50 mb-[117px]">samantha@email.com</p>
        <div className="menu">
          <ul className="flex flex-col gap-[30px]">
            {menuBar.map((items, index) => (
              <li className=" mr-2" key={index}>
                <div className="flex justify-between items-center">
                  <Link
                    to={items.to}
                    // onClick={() => {
                    //   setIsActive(isActive === index ? null : index);
                    // }}
                    className={`hover:opacity-100 transition-all duration-300 font-semibold text-2xl ${
                      location.pathname === items.to
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    {items.name}
                  </Link>
                  <div className="">{items.arrow}</div>
                </div>
                {/* {items.subMenu && isActive === index && (
                  <ul className="mt-5 flex flex-col gap-2 ml-10">
                    {items.subMenu?.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link className="font-medium opacity-50">
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
