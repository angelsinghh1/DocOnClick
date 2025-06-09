import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
  <div>

      <div className='flex flex-col md:flex-row flex-wrap bg-yellow rounded-lg px-6 md:px-10 lg:px-20'>
     
     {/*----------- LEFT SIDE ---------- */}
     <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-70px]'>
        <p className='text-3xl  md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium eveniet eius eos 
              <br className='hidden text-xl sm:block'/>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis a fugit dolores excepturi eius laborum minima unde assumenda inventore laudantium.
            </p>
        </div>
        <a href="#speciality" className='flex p-3 items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
     </div>

     {/*----------- Right SIDE ---------- */}
     <div className='md:w-1/2 relative'>
      <img className='md:absolute w-full bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
     </div>
    </div>

    {/* ----------SEARCH BAR ------------- */}
    
<form className="w-full px-6 py-8">
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative max-w-3xl mx-auto w-full">

    <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>

    <input type="search" id="default-search"
      className="block w-full h-16 p-5 ps-14 text-base text-gray-900 border border-black rounded-full bg-white focus:ring-0 focus:border-black dark:bg-white dark:text-gray-900"
      placeholder="Search Google or type a URL" required />
    <button type="submit"
      className="text-white absolute end-3 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-base px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Search
    </button>
  </div>
</form>



  
  </div>
    
  )
}

export default Header

