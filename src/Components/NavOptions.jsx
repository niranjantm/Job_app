import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";


function NavOptions({ data }) {
  const navigate = useNavigate();
  const handleClick = (item) => {};
  return (
    <ul className="flex flex-col gap-[25px]">
      {data.map((item) => {
        return (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`text-stone-200 ${
              item === "Jobs" ? "bg-yellow-500 text-gray-800" : ""
            } font-semibold px-3 py-2 flex justify-between w-[250px] rounded-lg cursor-pointer hover:bg-yellow-500 hover:text-gray-800`}
          >
            <span>{item}</span>
            <span>{">"}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default NavOptions;
