import React from 'react'
import { CiSearch } from "react-icons/ci";
import bell from "../assets/bell.png"
import user from "../assets/user.png"


function Searchbar() {
  return (
    <div className='flex bg-slate-50 w-full rounded-lg gap-5 p-4 max-h-[80px]'>
        <div className='bg-gray-200 py-2 px-4 rounded-lg flex justify-center flex-col w-[180px] items-center'>
            <p style={{fontSize:"11px"}} className=' text-gray-500 text-start'>Your Organization</p>
            <p className='font-semibold text-start'>Skill Genic</p>
        </div>
        
        <div className='flex justify-between w-full '>
        <div className='flex gap-2 bg-gray-200 items-center rounded-lg p-2 '>
            <p className='text-gray-500'><CiSearch size={50}></CiSearch></p>
            <input type='text'className='h-[40px] rounded-lg bg-gray-200'placeholder='Search'></input>
        </div>
        <div className='flex items-center gap-5'>
          <img src={bell} alt="bell" />
          <img src={user} alt="user" />
        </div>
        </div>
        

    </div>
  )
}

export default Searchbar