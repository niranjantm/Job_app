import React from 'react'

function JobForm3({handleClose}) {
  return (
    <div>
        
        <div className='flex flex-col justify-center items-center gap-3'>

            <div className='flex gap-4'>
                <p className='text-gray-400 w-[200px] px-4 py-2 border border-gray-700 rounded-lg'>Round 1</p>
                <select className='w-[300px] px-3 py-1 border border-blue-700 text-blue-700 rounded-lg'>
                    <option className=''>Skill Assessment</option>
                </select>
            </div>
            <div className='flex gap-4'>
                <p className='text-gray-400 w-[200px] px-4 py-2 border border-gray-700 rounded-lg'>Round 2</p>
                <select className='w-[300px] px-3 py-1 border border-blue-700 text-blue-700 rounded-lg'>
                    <option className=''>Technical Interview</option>
                </select>
            </div>
            <div className='flex gap-4'>
                <p className='text-gray-400 w-[200px] px-4 py-2 border border-gray-700 rounded-lg'>Round 3</p>
                <select className='w-[300px] px-3 py-1 border border-blue-700 text-blue-700 rounded-lg'>
                    <option className=''>AI Based Video</option>
                </select>
            </div>
            <div className='flex gap-4'>
                <p className='text-gray-400 w-[200px] px-4 py-2 border border-gray-700 rounded-lg'>Final Round</p>
                <select className='w-[300px] px-3 py-1 border border-blue-700 text-blue-700 rounded-lg'>
                    <option className=''>Off line - Online Interview</option>
                </select>
            </div>
            
            <button type='button'className='w-fit px-8 py-2 bg-black rounded-lg text-white'> Add Round</button>
        
            
        </div>

        <div className='flex gap-4 justify-center mt-3'>

            <div>
                <p className='font-bold mb-2'>Kindly Check the Skills</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md"placeholder='SEO & SEM'></input>
            </div>
            <div>
                <p className='font-bold mb-2'>Any Plateform or Qualification</p>
                <input className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md"placeholder='Yes'></input>
            </div>
        </div>
        <div className='flex gap-4 justify-center mt-3'>

            <div>
                <p className='font-bold mb-2'>Finalise Questioner</p>
                <textarea className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md"placeholder="Selected intern's day-to-day responsibilities include"></textarea>
            </div>
            <div>
                <p className='font-bold mb-2'>Share Availiblity</p>
                <textarea className ="bg-slate-300 w-[300px] py-3 px-2 rounded-md"placeholder="Selected intern's day-to-day responsibilities include"></textarea>
            </div>
        </div>
        <div className='flex justify-center mt-8'>
        <button type='button'className='w-fit px-8 py-2 bg-black rounded-lg text-white' onClick={handleClose}>Submit</button>
        </div>
        

    </div>
  )
}

export default JobForm3