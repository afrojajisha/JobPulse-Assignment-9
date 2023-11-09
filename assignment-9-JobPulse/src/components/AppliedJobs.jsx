import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EachAppliedJobs from './EachAppliedJobs';

const AppliedJobs = () => {
    const {appliedJobsData} = useLoaderData();
    console.log(appliedJobsData);
    const [fiterOption, setFilterOption] = useState("All");
    const filterJobs = appliedJobsData.filter(job => {
        console.log(`Filter Option: ${fiterOption}`);
        console.log(`Remote or Onsite: ${job.remote_or_onsite}`);
        if (fiterOption === "All"){
            return true;
        }
        return job.remote_or_onsite === fiterOption;
    })

    return (
        <div className="px-4  mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className='lg:text-right lg:mr-72'>
                <select name="Filter" className="border rounded mt-10 px-4 py-2 focus:outline-none focus:border-blue-500" onChange={(e)=> setFilterOption(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                </select>

            </div>
            <div className='flex flex-col mx-auto  max-w-3xl p-6 space-y-4 sm:p-10'>
                {
                    filterJobs.map(appliedJobs => <EachAppliedJobs key={appliedJobs.id} appliedJobs={appliedJobs} ></EachAppliedJobs>)
                }
                {/* {appliedJobsData.map(appliedJobs =><EachAppliedJobs key={appliedJobs.id} appliedJobs={appliedJobs} ></EachAppliedJobs>)} */}
            </div>
            
        </div>
    );
};

export default AppliedJobs;