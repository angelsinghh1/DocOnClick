import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* --------------LEFT SECTION ------------*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-700 leading-6'>We simplify healthcare by helping you find and book doctor appointments quickly and securely. From general checkups to specialist care, manage your health easily—anytime, anywhere.  Your health, your schedule—made easier.</p>
        </div>

        {/* --------------CENTER SECTION -----------*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2  text-gray-700'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* --------------RIGHT SECTION -----------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2  text-gray-700'>
                <li>+91 9828*****1</li>
                <li>doconclick@gmail.com</li>
            </ul>
        </div>
      </div>

        {/*------- Copyright Text ---------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 20240 DocOnClick - All Rights Reserved</p>
        </div>
      </div>
  )
}

export default Footer
