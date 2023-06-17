import React, { useEffect, useState } from 'react'
import { useUserData } from '../../hooks/useUserData'
import image from '../../assets/banner/SLIDE3.jpg'
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

const SingleInstructor = () => {
  const { users, isLoading } = useUserData('instructor')
  const { id } = useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
    if (!isLoading) {
      const user = users.find((i) => i._id === id)
      setUser(user)
    }
  }, [id])
  return (
    <>
      <PageHeader headerInfo={{ img: image, title: user?.name }} />
      <div className='px-6 py-10 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
        <div className='flex flex-col lg:items-center lg:flex-row gap-5'>
          <div className='flex items-center mb-6 lg:w-1/2 lg:mb-0'>
            <img className='w-4/5 rounded-md' src={user?.image} alt='' />
          </div>
          <div className='lg:w-1/2'>
            <p className='text-khaki font-bold tracking-widest'>About Me</p>
            <h2 className='max-w-xl mb-4 md:mb-6 text-xl leading-tight font-Bellefair font-normal tracking-tight text-black dark:text-white md:text-2xl md:leading-tight capitalize'>
              Jhon<span className='text-khaki'> {user.name}</span>
            </h2>
            <p className='text-gray-800 max-w-xl text-base mb-6'>
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleInstructor
