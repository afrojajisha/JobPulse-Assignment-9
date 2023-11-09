import React from 'react';

const JobCategoryList = ({joblist}) => {
    return (
        
            <div className=''>
                <div className='bg-gray-100 w-52 p-5 rounded mt-2'>
                <img className='w-14 h-14 mb-4' src={joblist.logo} alt="" />
                <h4 className='font-medium text-sm text-left'>{joblist.category_name}</h4>
                <p className='text-xs text-gray-400 mt-2 text-left'>{joblist.availability}</p>
                </div>
           </div>
            
       
    );
};

export default JobCategoryList;