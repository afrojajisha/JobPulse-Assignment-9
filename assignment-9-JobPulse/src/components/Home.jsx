import React, { useState } from 'react';
import candidateImg from '../assets/candidate.png';
import { useLoaderData } from 'react-router-dom';
import JobCategoryList from './JobCategoryList';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    const { categories, jobs } = useLoaderData();
    console.log(categories);
    
    console.log(jobs);

    const [showAllJobs, setshowAllJobs ] = useState(false);
    const featuredJobsToShow = showAllJobs ? jobs : jobs.slice(0, 4);
    console.log(featuredJobsToShow);

    // console.log(jobCategory);
    return (
        <div>
             <div className='mx-auto  max-w-xl md:max-w-full lg:max-w-screen-xl '>
               <div className='flex-cols  md:flex lg:flex justify-around items-center mt-'>
                     {/* left side */}
                 <div>
                    <h1 className='text-2xl md:text-4xl lg:text-4xl lg:text-left font-bold text-gray-700 leading-snug mt-4 md:mt-8 lg:mt-0'>Take the Next Step  <br/> Toward Your </h1>
                    <h2  className='text-2xl md:text-4xl lg:text-4xl mt- lg:text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600 mt-3' >Dream Career </h2>
                    <p className='text-xs lg:text-left ml-16 lg:ml-0  text-gray-500 w-4/6 lg:w-80 mt-4'> Discover countless job openings with comprehensive details. Your future awaits – seize it. Effortlessly handle all your job applications from beginning to end.</p>
                    <div className='lg:text-left text-center mt-6 relative '>
                    


                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 rounded font-semibold hover:shadow-lg hover:text-gray-200 hover:bg-purple-900 transition duration-300!important'>Get Started</button>
                    </div>
                </div>
                
                <div>
                <img className='w-4/6 lg:h-5/6 lg:w-5/6 ml-12 lg:ml-6' src={candidateImg} alt="Your Image" />
               </div>    
             </div>
              

             {/* Job categories */}
            <div className='mt-16 mx-auto'>
                <h1 className='text-xl lg:text-3xl   lg:text-center md:text-center font-bold text-gray-800 '>Job Category List</h1>
                <p className='text-xs  w-3/6  lg:mx-auto text-center ml-24 text-gray-500  mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='lg:flex md:flex flex-cols px-24  lg:justify-evenly items-center mt-8 lg:px-10'>
                    {categories.map(joblist =><JobCategoryList joblist={joblist}></JobCategoryList>)}
                </div>
            </div>

            {/* Featured Jobs */}
            <div className='mt-16 mx-auto'>
                <h1 className='text-xl lg:text-3xl   md:text-center lg:text-center font-bold text-gray-800'>Featured Jobs</h1>
                <p className='text-xs  w-3/6 lg:mx-auto text-gray-500 ml-24 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols gap-5 lg:grid-cols-2 px-8 lg:px-28 mt-8'>
              
                    {jobs.map((job, index)=>
                    {if (!showAllJobs && index >=4)
                        {return null;} // Skip rendering if showAllJobs is false and index is greater than or equal to 4
                    return <FeaturedJobs key={job.id} job={job} isFeatured={index < 4 && !showAllJobs}></FeaturedJobs>})}
                </div>
                
            </div>

            <div className='flex justify-center mt-8 '>
                    <button onClick={() => setshowAllJobs(true)} style={{ display: showAllJobs ? 'none' : 'block' }} className='px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded font-semibold hover:shadow-lg hover:text-gray-200 hover:bg-purple-900 transition duration-300!important'>Show All</button>
            </div>
        </div>
        </div>
        
    );
};

export default Home;


// https://i.ibb.co/DMCYr1C/accounts.png