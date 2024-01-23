import React, { useState } from "react";
import { FaLocationDot} from "react-icons/fa6";
import { BsTagFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";

import CardOptions from "./CardOptions";

function JobCard({ data }) {
  
  const handleOptions=(showOption)=>{
    showOption(pre=>!pre)
  }
  return (
    <div className="flex flex-wrap justify-center gap-3">

     { data.map((item,index)=>{
      return(
        <div key={index} className="relative w-[290px] h-[270px] bg-stone-50 rounded-lg">
        
        <div className="absolute top-1 right-1"><CardOptions handleOptions={handleOptions}></CardOptions></div>
        <div className="p-4 flex flex-col">
          <p className="text-lg">{item.name}</p>
          
          <div className="flex flex-col gap-2 mt-8">

          <div className="flex gap-3 items-center">
            <FaLocationDot></FaLocationDot>
            <p>{item.address}</p>
          </div>
          <div className="flex gap-3 items-center">
            <BsTagFill></BsTagFill>
            <p>{item.salary}</p>
          </div>
          <div className="flex gap-3 items-center">
            <GiPathDistance></GiPathDistance>
            <p>{item.exp}{" years of Experience"}</p>
          </div>
          
          </div>
          
          
          <div className="flex gap-2 w-full justify-center mt-[50px]">
            <p className="w-fit  px-[6px] py-1  rounded-full text-white bg-blue-800 text-sm whitespace-nowrap">14 Application</p>
            <p className="w-fit px-[6px] py-1 rounded-full text-white bg-orange-500 text-sm whitespace-nowrap">12 InProcess</p>
            <p className="w-fit px-[6px] py-1 rounded-full text-white bg-green-500 text-sm whitespace-nowrap">16 Hired</p>
          </div>
        </div>
      
    </div>
      )
     })}

    </div>
    
  );
}

export default JobCard;
