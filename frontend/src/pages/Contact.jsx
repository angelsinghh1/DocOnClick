import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-xl'>

          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

          <div className='flex flex-col justidy-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Our TEAM</p>
            <p className='text-gray-500'>15, 16, House Of Lords, Ground Floor, <br /> St Marks Road, Bangalore</p>
            <p className='text-gray-500'>Tel: (183) 999-9*** <br /> Email: doconclick@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>Careers at DocOnClick</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>

        </div>
    </div>
  )
}

export default Contact
