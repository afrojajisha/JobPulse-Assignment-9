import React from 'react';
import {Link, useNavigate } from 'react-router-dom'

const EachAppliedJobs = ({appliedJobs}) => {
    const {logo,id, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements,experiences, contact_information} = appliedJobs;
    const navigate = useNavigate();
    const handleViewDetails=()=>{
        navigate(`/job-details/${appliedJobs.id}`)
    }
    
    return (
        <div className='border border-gray-200 rounded text-left p-4 flex justify-between items-center'>
          <div>
          <img src={logo} alt="" />
            <h5 className='font-semibold text-lg mt-4 text-gray-600'>{job_title}</h5>
            <p className='text-sm text-gray-500 mt-3'>{company_name}</p>
            <div className='flex gap-3 mt-3 text-blue-600 text-xs'>
                <button className='border border-gray-300 border-solid px-2 py-1 rounded'>{remote_or_onsite}</button>
                <button className='border border-gray-300 border-solid px-2 py-1 rounded'>{job_type}</button>
            </div>
            </div>
            {/* right side button */}
           
                <button onClick={handleViewDetails} className='mt-4 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white'>View Details</button>
            
          
        </div>
    );
};

export default EachAppliedJobs;