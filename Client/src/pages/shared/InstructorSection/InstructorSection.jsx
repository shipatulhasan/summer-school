import React from 'react'
import { useUserData } from '../../../hooks/useUserData'

const InstructorSection = () => {
  const { users, isLoading } = useUserData('instructor')
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='mx-auto mb-10 lg:max-w-xl sm:text-center'>
        <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
          Our Team
        </p>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black md:text-5xl md:mx-auto'>
          Meet Our Instructors{' '}
        </h2>{' '}
      </div>
      <div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3'>
        {!isLoading &&
          users?.map((user) => (
            <div
              key={user._id}
              className='flex flex-col items-center bg-slate-100 shadow-md rounded-sm max-w-[250px] py-5 hover:cursor-pointer'>
              <img
                className='object-cover w-20 h-20 md:h-36 md:w-36 mb-2 rounded-full shadow'
                src={user?.image}
                alt='Person'
              />
              <div className='flex flex-col items-center'>
                <p className='text-lg font-bold'>{user?.name}</p>
                <p className='text-sm text-gray-800'>{user?.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default InstructorSection
