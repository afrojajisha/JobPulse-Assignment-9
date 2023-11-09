import React from 'react';
import iconPinterest from '../assets/social/pinterest.png'; 
import iconInstagram from '../assets/social/instagram.png'; 
import iconTwitter from '../assets/social/twitter.png'; 
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className=" mx-auto max-w-none mt-10  bg-black py-10">
            <div className='lg:flex md:flex flex-cols px-8  lg:px-14  justify-evenly  text-white '>
                <div className='py-8'>
                    <h3 className='text-2xl font-bold text-left '>JobPluse</h3>
                   <p className='text-xs text-gray-400 w-64 text-left mt-3 leading-relaxed'>JobPluse is a job portal website, where you will get most updated and attractive job post for your dream career. </p> 
                   <div className='flex items-center mt-4'>
                   <Link to ='/'><img src={iconPinterest} alt='Icon' className='w-6 h-6 mr-4' /></Link>
                   <Link to ='/'><img src={iconInstagram} alt='Icon' className='w-6 h-6 mr-4' /></Link>
                   <Link to ='/'><img src={iconTwitter} alt='Icon' className='w-6 h-6 mr-4' /></Link>
                   </div>
                </div>
                <div className='py-8'>
                    <h3 className='text-base text-left '>Company</h3>
                    <ul className='mt-4 text-sm text-gray-400 text-left leading-loose'>
                        <li> <Link to ='/'>Work</Link></li>
                        <li> <Link to ='/'>Career</Link></li>
                        <li> <Link to ='/'>Latest News</Link></li>
                        <li> <Link to ='/'>About Us</Link></li>
                    </ul>
                </div>
                <div className='py-8'>
                    <h3 className='text-base text-left '>Product</h3>
                    <ul className='mt-4 text-sm text-gray-400 text-left leading-loose'>
                        <li> <Link to ='/'>Plans & Pricing</Link></li>
                        <li> <Link to ='/'>Customers</Link></li>
                        <li> <Link to ='/'>Prototype</Link></li>
                        <li> <Link to ='/'>Integrations</Link></li>
                    </ul>
                </div>
                <div className='py-8'>
                    <h3 className='text-base text-left '>Support</h3>
                    <ul className='mt-4 text-sm text-gray-400 text-left leading-loose'>
                        <li> <Link to ='/'>Help Desk</Link></li>
                        <li> <Link to ='/'>Become a Partner</Link></li>
                        <li><Link to ='/'>Developers</Link></li>
                        <li><Link to ='/'>Sales</Link></li>
                    </ul>
                </div>
                <div className='py-8'>
                    <h3 className='text-base text-left '>Contact</h3>
                    <ul className='mt-4 text-sm text-gray-400 text-left leading-loose'>
                        <li>524 Broadway , Chittagong</li>
                        <li>+144 456 8900</li>
                        
                    </ul>
              </div>
                
                
            </div>
        
            <div class="border-t border-gray-500 my-4 mx-auto w-10/12"></div>
                <div className='flex justify-between text-gray-400 lg:px-28 mt-4 text-xs'>
                    <p>@2023 JobPulse. All Rights Reserved</p>
                    <p>Powered by JobPulse</p>
                </div>

            

            
        </div>
    );
};

export default Footer;