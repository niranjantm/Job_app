import React, { useState } from 'react'
import { CiMemoPad } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import JobForm1 from './JobForm1';


function CreateAJob({setJobForm}) {
    const [form,setForm] = useState(false)

    const handleClose=()=>{
        setJobForm(false)
    }
  return (
    <div className='w-[800px] h-fit p-8 flex justify-center flex-col bg-slate-100 rounded-lg relative '>
        <div className='mb-8'>
           <p className='text-2xl font-semibold text-center'>
           Create a Job
            </p> 
        </div>
        <button onClick={handleClose} className='absolute top-2 right-2'><IoCloseCircle color='red' size={30}></IoCloseCircle></button>

        {!form && <div className='w-full bg-slate-200 flex justify-center items-center p-8 rounded-lg'>
            <button onClick={()=>setForm(true)} className='px-[80px] py-[20px] flex flex-col justify-center border border-blue-600 bg-slate-100 rounded-lg'>
                <div className='flex justify-center w-full'>
                <CiMemoPad size={50} color='blue'></CiMemoPad>
                    </div>
                <p className='text-blue-700'>Post Job With AI</p>
            </button>
        </div>}
        {form && <JobForm1 handleClose={handleClose}></JobForm1>}
    </div>
  )
}

export default CreateAJob