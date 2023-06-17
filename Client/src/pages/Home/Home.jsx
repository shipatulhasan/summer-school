import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BlogSection from '../shared/BlogSection/BlogSection'
import ClassSection from '../shared/ClassSection/classSection'
import InstructorSection from '../shared/InstructorSection/InstructorSection'
import NewsLetter from './NewLetter/NewsLetter'
import Slider from './Slider/Slider'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Music School</title>
      </Helmet>
      <div className='pb-5 bg-[#0C0C0C]'>
        <Slider />
      </div>
      <div className='py-16 lg:py-20'>
        <ClassSection />
        <div className='text-center'>
          <Link
            to='/classes'
            className=' px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#EFCF4F] hover:bg-[#C25934] focus:shadow-outline focus:outline-none'>
            View All
          </Link>
        </div>
      </div>
      <div className='py-16 lg:py-20'>
        <InstructorSection />
        <div className='text-center'>
          <Link
            to='/instructors'
            className=' px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#EFCF4F] hover:bg-[#C25934] focus:shadow-outline focus:outline-none'>
            View All
          </Link>
        </div>
      </div>

      <div className='py-16 lg:py-20'>
        <BlogSection />
        <div className='text-center'>
          <Link
            to='/blog'
            className=' px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#EFCF4F] hover:bg-[#C25934] focus:shadow-outline focus:outline-none'>
            View All
          </Link>
        </div>
      </div>

      <div className='border border-slate-400 max-w-4xl mx-auto mb-16 '>
        <NewsLetter />
      </div>
    </div>
  )
}

export default Home
