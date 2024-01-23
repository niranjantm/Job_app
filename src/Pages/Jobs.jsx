import React, { useState } from "react";
import Searchbar from "../Components/Searchbar";
import "../assets/switch.css";
import JobCard from "../Components/JobCard";
import data from "../assets/data";


function Jobs() {

  const [jobData,setJobData] = useState(data)
  return (
    <div className="w-full p-3 flex flex-col">
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

          <button className="w-[170px] h-[50px] text-center bg-black text-white rounded-lg">
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
  );
}

export default Jobs;
