import React from 'react';
import { Link } from 'react-router-dom';
import iconAddress from '../assets/icons/location2.png'; 
import iconMoney from '../assets/icons/money.png'; 



const FeaturedJobs = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements,experiences, contact_information} = job;
    
    return (
        <div className='border border-gray-200 rounded text-left lg:p-4 md:p-4 p-1'>
            <img src={logo} alt="" />
            <h5 className='font-semibold text-base lg:text-lg md:text-lg mt-4 text-gray-600'>{job_title}</h5>
            <p className='text-sm text-gray-500 mt-3'>{company_name}</p>
            <div className=' md:flex lg:flex gap-3 mt-3 text-blue-600 text-xs'>
                <button className='border border-gray-300 border-solid px-2 py-1 rounded'>{remote_or_onsite}</button>
                <button className='border border-gray-300 border-solid px-2 py-1 rounded'>{job_type}</button>
            </div>
            <div className='flex-cols md:flex lg:flex gap-3 mt-4'>
                <p className='flex items-center'><img src={iconAddress} alt='Icon' className='w-4 h-4 mr-2' /><span className='text-base text-gray-500'>{location}</span></p>
                <p className='flex items-center'><img src={iconMoney} alt='Icon' className='w-4 h-4 mr-2' /><span className='text-base text-gray-500'>Salary: {salary}</span>
                </p>
            </div>
            <Link to={`./job-details/${job.id}`}>
                <button className='mt-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded font-semibold hover:shadow-lg hover:text-gray-200 hover:bg-purple-900 transition duration-300!important'>View Details</button>
            </Link>

        </div>
    );
};

export default FeaturedJobs;