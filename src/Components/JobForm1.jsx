import React, { useState } from 'react'
import JobForm2 from './JobForm2'

function JobForm1({handleClose}) {
    const [formData2,setForm2] = useState(false)
  return (
    <div>
        <div className='flex gap-3 justify-center mb-10'>
            <p>Job Application</p>
            <p>Job Description</p>
            <p>Interview Process</p>
        </div>
        { !formData2 && <div>
 <form className='flex justify-center gap-4'>
            <div>
            <div>
                <p className='font-bold mb-2'>Position name</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" placeholder='Software engineer'></input>
            </div>
            <div>
                <p className='font-bold mb-2'>Job Pipeline</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" placeholder='Software engineer'></input>
            </div>
            <div>
                <p className='font-bold mb-2'>Contact Details</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" placeholder='Software engineer'></input>
            </div>
            <div>
                <p className='font-bold mb-2'>Add Maximum Salary</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" placeholder='Software engineer'></input>
            </div>
            <div>
                <p className='font-bold mb-2'>Select Frequency</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" placeholder='Software engineer'></input>
            </div>
            </div>
            
            <div>
            <div>
                <p className='font-bold mb-2'>Company name</p>
                <select className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" >
                    <option>Amir</option>
                </select>
            </div>
            <div>
                <p className='font-bold mb-2'>Add Location</p>
                <select className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" >
                    <option>Indore</option>
                </select>
            </div>
            <div>
                <p className='font-bold mb-2'>Add Minimum Salary</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" placeholder='10000'></input>
            </div>
            <div>
                <p className='font-bold mb-2'>Currency</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md" placeholder='US Dollor'></input>
            </div>
            </div>
            
        </form>
        
        <div className='flex w-full justify-center mt-2'>
        <botton onClick={()=>{setForm2(true)}} type="button" className="w-[200px] py-1 px-2 text-white bg-black rounded-md text-center">Save & Next</botton>
        </div>
            </div>
           }
           {formData2 && <JobForm2 handleClose={handleClose}></JobForm2>}
        

    </div>
  )
}

export default JobForm1