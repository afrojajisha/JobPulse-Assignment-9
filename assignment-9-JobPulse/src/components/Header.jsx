import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
       <> 
       <div className='lg:px-4 py-2 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl'>
       <div className='flex-cols md:flex lg:flex items-center justify-around mt-10'>
            <div className='mr-4 mb-4 lg:mb-0 md:mb-0 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600'>
                JobPulse
            </div>
            <div className='mt-3 mr-10 ml-8 text-gray-500 font-normal  '>
                <NavLink to='/' activeClassName='active'>Home</NavLink>
                <NavLink to='/applied-jobs' activeClassName='active' className='ml-4'>Applied Jobs</NavLink>
                <NavLink to='/statistics' activeClassName='active' className='ml-4'>Statistics</NavLink>
                <NavLink to='/Blog' activeClassName='active' className='ml-4'>Blog</NavLink>
            </div>
        
            <div className='mt-4 lg:mt-0 md:mt-0'>
                <Link to='/'><button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-3 rounded-md font-semibold hover:shadow-lg hover:text-gray-200 hover:bg-purple-900 transition duration-300!important'>Start Applying</button></Link>
            </div>
        </div>
        

       </div>
        </>
    );
};

export default Header;