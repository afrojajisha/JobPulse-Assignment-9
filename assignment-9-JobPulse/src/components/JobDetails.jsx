import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import iconMoney from '../assets/icons/money.png'; 
import iconCalender from '../assets/icons/calendar.png'; 
import iconEmail from '../assets/icons/email.png'; 
import iconPhone from '../assets/icons/phone.png'; 
import iconAddress from '../assets/icons/location2.png'; 
import { addToAppliedJobs } from '../utils/fakeDb';
import { fetchJobs } from '../loaders/categriesAndFeaturedJobs';



const JobDetails = () => {

    const jobData = useLoaderData();
    console.log(jobData);
    const [successMessage, setSuccessMessage] = useState('');
    const { id } = useParams(); // Get the ID from the URL params
    const jobId = parseInt(id, 10); // Parse the ID as an integer
    // // console.log(jobId);
    
    const specificJob = jobData.find(job => job.id === jobId);
    console.log(specificJob);

    const addAppliedJobHandler = (id) =>{
            // localStorage.setItem('appliedJob', jobId);
            addToAppliedJobs(id);
            setSuccessMessage('You have successfully applied for the job!')
            
        }

     return (
       
        <>
            
        <div className='bg-hero-pattern w-full h-40   bg-no-repeat flex items-center justify-center '> <h2 className='text-2xl font-semibold text-cyan-700 drop-shadow-lg'>Job Details</h2></div>
        
        <div className='lg:flex lg:justify-center flex-cols gap-3 mt-10 '>
            {/* {/* Left side */}
            <div className='w-7/12 text-left lg:ml-12	'> 
                {/* Job description */}
                <p className=''><span className='font-bold text-gray-700'>Job Description:</span> <span className=' text-gray-600 text-sm'>
                {specificJob.job_description}</span></p>

                {/* Job responsibility */}
                <p className='mt-8'><span className='font-bold text-gray-700'>Job Responsibility :</span> <span className=' text-gray-600 text-sm'>
                {specificJob.job_responsibility}</span></p>

                {/* Educational Requirement */}
                <p className='mt-8'><span className='font-bold text-gray-700'>Educational Requirement :</span> <br/><p className=' text-gray-600 text-sm mt-3'>
                {specificJob.educational_requirements}</p></p>

                {/* Experience */}
                <p className='mt-8'><span className='font-bold text-gray-700'>Experience :</span><br/><p className=' text-gray-600 text-sm mt-3'>
                {specificJob.experiences}</p></p>
                
            </div>
            {/* Right Side */}
            <div className='w-3/12'>
                <div className='bg-slate-100 p-5 rounded'>
                {/* Job Details part */}
             <div>
             <p className='text-left text-gray-800 text-base font-semibold '>Job Details</p>
                <p className='border-b border-gray-300 my-4 '></p>
                <div className='lg:flex items-center mt-4'>
                <img src={iconMoney} alt='Icon' className='w-4 h-4 mr-2' />
                <span className='font-semibold text-gray-600 text-sm'>Salary :</span><span className='ml-1 text-gray-600 text-sm'>{specificJob.salary} (per month)</span>
                </div>
                <div className='flex items-center mt-4'>
                <img src={iconCalender} alt='Icon' className='w-4 h-4 mr-2' />
                <span className='font-semibold text-gray-600 text-sm'>Job Title :</span><span className='ml-1 text-gray-600 text-sm'>{specificJob.job_title} </span>
                </div>
             </div>

                   {/* Contact info part */}
                <div className='mt-8'>
                <p className='text-left text-gray-800 text-base font-semibold '>Contact Information</p>
                <p className='border-b border-gray-300 my-4 '></p>
                <div className='flex items-center mt-4'>
                <img src={iconPhone} alt='Icon' className='w-4 h-4 mr-2' />
                <span className='font-semibold text-gray-600 text-sm'>Phone :</span><span className='ml-1 text-gray-600 text-sm'>{specificJob.contact_information.phone
} </span>
                </div>
                <div className='flex items-center mt-4'>
                <img src={iconEmail} alt='Icon' className='w-4 h-4 mr-2' />
                <span className='font-semibold text-gray-600 text-sm'>Email :</span><span className='ml-1 text-gray-600 text-sm'>{specificJob.contact_information.email} </span>
                </div>
                <div className='flex  mt-4'>
                <img src={iconAddress} alt='Icon' className='w-4 h-4 mr-2' />
                <p className='font-semibold text-gray-600 text-sm'>Address:</p>
                <span className=' text-gray-600 text-sm'>{specificJob.contact_information.address} </span>
                </div>
                </div>
                
            </div>
             {/* Apply now button */}
            <div className='bg-white mt-5'>
                <button onClick={()=>addAppliedJobHandler(id)} className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white  w-full rounded font-semibold py-3'>Apply Now</button>
                {successMessage && <div className='text-green-500 font-semibold mt-2'>{successMessage}</div>}
            </div>       
                </div>
            </div> 
         </>
           
        
    );
};

export default JobDetails;
 {/* <h2>{selectedJob.job_description}</h2> */}