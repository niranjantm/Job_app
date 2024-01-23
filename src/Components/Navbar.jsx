import React from "react";
import { Outlet } from "react-router-dom";
import NavOptions from "./NavOptions";
import { options } from "../assets/Options";
import { FiHexagon } from "react-icons/fi"


function Navbar() {
  return (
    <div className="flex">
      <div className="w-[306px] h-full scrollbar-hide bg-gray-900 px-5 pb-5">
        <div className="flex my-8 gap-3 items-center">
        <span className="text-stone-200"><FiHexagon size={60}></FiHexagon></span>
        <p className="capitalize text-2xl font-bold text-stone-200">logo</p>
        </div>
        
        <NavOptions data = {options.home}></NavOptions>
        <p className="uppercase text-xl text-stone-500 my-5">Recruitment</p>
        <NavOptions data = {options.recruitment}></NavOptions>
        <p className="uppercase text-xl text-stone-500 my-5">Organization</p>
        <NavOptions data = {options.organization}></NavOptions>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;
