import React from "react";
import Chart from "../components/Chart";
import users from "../assets/Users.png";
import box from "../assets/box.png";
import flower from "../assets/flower.png";
import Line from "../components/Line";
import { BsThreeDots } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaBowlFood, FaCarRear } from "react-icons/fa6";

const Expenses = () => {
  return (
    <div className="flex md:flex-row flex-col text-black">
      <div className="left md:px-[100px] px-10 py-[60px]">
        <div className="">
          <div className="flex justify-between">
            <h2 className="font-semibold text-[40px] leading-[50px]">
              Expenses
            </h2>
            <img src={users} alt="" />
          </div>
          <p className="opacity-50 mt-1">01 - 25 March, 2020</p>
        </div>
        {/* <Chart /> */}
        <Line />
        <div className="today mt-[47px] flex justify-between pb-2 border-b border-b-[#d8d8d86c] mb-6">
          <h3 className="">Today</h3>
          <BsThreeDots className="opacity-60" />
        </div>
        <div className="flex gap-[30px] flex-col">
          <div className="grocery flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#32A7E2] flex items-center justify-center">
                <FaShoppingCart className="text-white" />
              </div>
              <div className="">
                <h3 className="mb-1 font-semibold">Grocery</h3>
                <p className="opacity-50">5:12 pm • Belanja di pasar</p>
              </div>
            </div>
            <h2 className="font-semibold">-326.800</h2>
          </div>
          <div className="grocery flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#B548C6] flex items-center justify-center">
                <FaCarRear className="text-white" />
              </div>
              <div className="">
                <h3 className="mb-1 font-semibold">Transport</h3>
                <p className="opacity-50">5:12 pm • Belanja di pasar</p>
              </div>
            </div>
            <h2 className="font-semibold">-26.500</h2>
          </div>
          <div className="grocery flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF8700] flex items-center justify-center">
                <FaShoppingCart className="text-white" />
              </div>
              <div className="">
                <h3 className="mb-1 font-semibold">Housing</h3>
                <p className="opacity-50">5:12 pm • Belanja di pasar</p>
              </div>
            </div>
            <h2 className="font-semibold">-100.80</h2>
          </div>
        </div>
        <div className="monday mt-[60px] flex justify-between pb-2 border-b border-b-[#d8d8d86c] mb-6">
          <h3 className="">Monday, 23 March 2020</h3>
          <BsThreeDots className="opacity-60" />
        </div>
        <div className="flex gap-[30px] flex-col">
          <div className="grocery flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center">
                <FaBowlFood className="text-white" />
              </div>
              <div className="">
                <h3 className="mb-1 font-semibold">Food and Drinks</h3>
                <p className="opacity-50">5:12 pm • Belanja di pasar</p>
              </div>
            </div>
            <h2 className="font-semibold">-1234.800</h2>
          </div>
          <div className="grocery flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center">
                <FaCarRear className="text-white" />
              </div>
              <div className="">
                <h3 className="mb-1 font-semibold">Vehicle</h3>
                <p className="opacity-50">5:12 pm • Belanja di pasar</p>
              </div>
            </div>
            <h2 className="font-semibold">-15.800</h2>
          </div>
        </div>
      </div>
      <div className="right bg-[#F9FAFC] w-full py-[70px] px-[40px]">
        <h2 className="text-xl font-semibold mb-[30px]">Where your money go</h2>
        <div className="flex flex-col gap-[30px]">
          <div className="food">
            <div className="flex justify-between">
              <h3 className="font-medium">Food and Drinks</h3>
              <p className="">872.400</p>
            </div>
            <div className="line mt-2 w-full h-[5px] rounded-[5px] overflow-hidden bg-[#ECEFF5]">
              <div className="LFood w-[70px] h-full bg-green-600"></div>
            </div>
          </div>
          <div className="food">
            <div className="flex justify-between">
              <h3 className="font-medium">Shopping</h3>
              <p className="">1.378.200</p>
            </div>
            <div className="line mt-2 w-full h-[5px] rounded-[5px] overflow-hidden bg-[#ECEFF5]">
              <div className="green LShopping w-[110px] h-full bg-green-600"></div>
            </div>
          </div>
          <div className="food">
            <div className="flex justify-between">
              <h3 className="font-medium">Housing</h3>
              <p className="">928.500</p>
            </div>
            <div className="line mt-2 w-full h-[5px] rounded-[5px] overflow-hidden bg-[#ECEFF5]">
              <div className="green LHousing w-[90px] h-full bg-green-600"></div>
            </div>
          </div>
          <div className="food">
            <div className="flex justify-between">
              <h3 className="font-medium">Transportation</h3>
              <p className="">420.700</p>
            </div>
            <div className="line mt-2 w-full h-[5px] rounded-[5px] overflow-hidden bg-[#ECEFF5]">
              <div className="green LTransportation w-[60px] h-full bg-green-600"></div>
            </div>
          </div>
          <div className="food">
            <div className="flex justify-between">
              <h3 className="font-medium">Vehicle</h3>
              <p className="">520.000</p>
            </div>
            <div className="line mt-2 w-full h-[5px] rounded-[5px] overflow-hidden bg-[#ECEFF5]">
              <div className="green LVehicle w-[90px] h-full bg-green-600"></div>
            </div>
          </div>
        </div>
        <div className="relative mt-[101px] pt-[77px] px-6 pb-6 bg-[#EDF0F6] rounded-[15px]">
          <div className="flex px-6 justify-between w-full absolute left-0 -top-[30px]">
            <img src={box} alt="" />
            <img src={flower} alt="" />
          </div>
          <h3 className="font-semibold">Save more money</h3>
          <p className="text-[12px] opacity-50 mt-1 mb-5">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <button className="text-[13px] text-white rounded-lg px-[62px] py-3 w-full bg-black">
            VIEW TIPS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
