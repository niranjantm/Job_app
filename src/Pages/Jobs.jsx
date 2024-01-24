import React, { useState } from "react";
import Searchbar from "../Components/Searchbar";
import "../assets/switch.css";
import JobCard from "../Components/JobCard";
import data from "../assets/data";
import CreateAJob from "../Components/CreateAJob";


function Jobs() {

  const [jobData,setJobData] = useState(data)
  const [jobForm,setJobForm] = useState(false)
  console.log(jobForm)
  return (
    <div className="relative">
      <div className={`w-full p-3 flex flex-col ${jobForm?"blur-sm":""}`}>
      <Searchbar></Searchbar>

<div className="flex justify-between mt-5">
  <p className="text-2xl font-semibold">Active Jobs</p>
  <div className="flex gap-5">
    <div className="flex gap-5 w-[170px] h-[50px] border border-black bg-gray-200 shadow-lg rounded-lg items-center justify-center">
      <p className="font-semibold">Active</p>
      <label className="switch">
        <input type="checkbox" className="w-0 h-0 opacity-0"></input>
        <span className="slider round"></span>
      </label>
    </div>

    <button onClick={()=>setJobForm(true)} className="w-[170px] h-[50px] text-center bg-black text-white rounded-lg">
      Create Job
    </button>
  </div>
</div>

<div className="mt-10">
  <JobCard
    data={jobData}
  ></JobCard>
</div>
      </div>
      

      {jobForm&&<div className="absolute z-10  right-0 top-0 h-full  left-0 flex justify-center">
            <div className="z-20 mt-[150px]">
            <CreateAJob></CreateAJob>
            </div>
            
      </div>}
    </div>
  );
}

export default Jobs;
