import React, { useState } from 'react'
import JobForm3 from './JobForm3'

function JobForm2({handleClose}) {

    const [formData3,setForm3] = useState(false)
  return (
    <div>
        {!formData3 && <form className='flex flex-col justify-center items-center gap-5'>
            <div>
                <p className='font-bold mb-2'>Skill Required</p>
                <input className ="bg-slate-300 w-[500px] py-3 px-2 rounded-md" placeholder='Software Engineer'></input>
            </div>
            <div>
                <p className='font-bold mb-2'>Intern's Responsibility</p>
                <textarea className ="bg-slate-300 w-[500px] py-3 px-2 rounded-md"></textarea>
            </div>
            <div className='flex w-full justify-center mt-2'>
        <botton onClick={()=>{setForm3(true)}} type="button" className="w-[200px] py-1 px-2 text-white bg-black rounded-md text-center">Save & Next</botton>
        </div>
        </form>}
        {formData3 && <JobForm3 handleClose={handleClose}></JobForm3>}
    </div>
  )
}

export default JobForm2