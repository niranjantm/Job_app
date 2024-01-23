import React, { useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";

function CardOptions({handleOptions}) {
  const [option, showOption] = useState(false);

  const handleClick=()=>{
    handleOptions(showOption)
  }
  return (
    <div>
      <div className='relative'>
      <p onClick={handleClick} className="absolute right-0 top-1">
        <HiOutlineDotsVertical size={30}></HiOutlineDotsVertical>
      </p>
      </div>
      
 {option && <div className='flex flex-col gap-1 items-start p-4 rounded-lg shadow-lg border bg-slate-50 '>
        <p className='hover:shadow-lg px-3 w-full text-sm'>View Job</p>
        <p className='hover:shadow-lg px-3 w-full text-sm'>Edit</p>
        <p className='hover:shadow-lg px-3 w-full text-sm'>Application Manager</p>
        <p className='hover:shadow-lg px-3 w-full text-sm'>Share & Promote</p>
        <p className='hover:shadow-lg px-3 w-full text-sm'>New Hire</p>
        <p className='hover:shadow-lg px-3 w-full text-sm'>Close Job</p>
    </div>}
    </div>
   
  )
}

export default CardOptions