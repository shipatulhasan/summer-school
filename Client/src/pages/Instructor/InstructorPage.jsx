import React from 'react'
import { Helmet } from 'react-helmet-async'
import image from '../../assets/banner/SLIDE2.jpg'
import PageHeader from '../../components/PageHeader'
import { useUserData } from '../../hooks/useUserData'
import { useNavigate } from 'react-router-dom'

const InstructorPage = () => {
  const { users, isLoading } = useUserData('instructor')
  const navigate = useNavigate()
  return (
    <div>
      <Helmet>
        <title>Instructor - Music School</title>
      </Helmet>
      <PageHeader headerInfo={{ image, title: 'Meet Our instructor' }} />
      <div className='px-4 py-16 lg:py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8'>
        <div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3'>
          {!isLoading &&
            users?.map((user) => (
              <div
                key={user._id}
                onClick={() => navigate(`/instructor/${user?._id}`)}
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
    </div>
  )
}

export default InstructorPage
