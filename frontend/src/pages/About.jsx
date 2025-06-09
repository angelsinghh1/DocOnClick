import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-800 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis sequi commodi enim quo totam voluptates obcaecati, dicta, facilis eos, blanditiis dignissimos laudantium pariatur officiis architecto! 
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur inventore vero, laborum eum dolore laudantium saepe ut itaque recusandae quidem eligendi quae, ab cupiditate natus?
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, eaque deserunt fugit accusantium magnam quis voluptas provident ullam quae nulla.
          </p>
        </div>
      </div>

      <div className='text-2xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb:-20'>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam perspiciatis dicta nemo earum atque.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Reliable</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita aspernatur laborum qui facilis debitis?
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personlization</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus dicta itaque alias facere doloremque!</p>
        </div>

      </div>

    </div>
  )
}

export default About
