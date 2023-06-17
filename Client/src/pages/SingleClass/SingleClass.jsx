import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { useLocation, useParams } from 'react-router-dom'
import CategorySidebar from './CategorySidebar'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useClasses } from '../../hooks/useClasses'
import SingleClassLoading from './SingleClassLoading'
import BookingModal from './BookingModal'

const SingleClass = () => {
  const [classes, catLoading] = useClasses()
  const [show, setShow] = useState(false)
  const [imgLoading, setImgLoading] = useState(false)

  const { id } = useParams()

  const {
    data: myClass,
    refetch,
    isLoading
  } = useQuery({
    queryKey: ['class', id],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_APP_api}/class/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('music-school-token')}`
        }
      }).then((res) => res.json())
  })

  const { state } = useLocation()
  // const navigation = useNavigation();
  if (isLoading || catLoading) {
    return <SingleClassLoading />
  }
  return (
    <div>
      <Helmet>
        <title>{state?.title ? state?.title : 'Class'} - Music School</title>
      </Helmet>
      <PageHeader headerInfo={{ img: state?.image, title: state?.title }} />
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:py-20'>
        <div className='grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-5 '>
          <div className='bg-white border border-slate-200 shadow-lg shadow-slate-300 '>
            <h2 className='text-2xl font-semibold p-5 '>Other classes</h2>
            {classes.map((cat, i) => (
              <CategorySidebar
                key={cat._id}
                cat={cat}
                lastItem={i === classes.length - 1}
              />
            ))}
          </div>
          <div className='md:col-span-4 space-y-8 md:space-y-10'>
            <div className='grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5'>
              <div>
                <img
                  className={`${
                    !imgLoading ? 'blur-md' : 'blur-none'
                  }object-contain w-full h-56 rounded sm:h-96`}
                  src={myClass?.image}
                  onLoad={() => setImgLoading(true)}
                  alt=''
                />
              </div>

              {/*  */}
              <div className='space-y-5 '>
                <div>
                  <div className='space-y-4 md:space-y-0 md:flex justify-between'>
                    <div className='space-y-1'>
                      <h3 className='text-xl font-bold leading-snug sm:pr-8'>
                        {myClass?.title}
                      </h3>
                      <p className='text-lg font-semibold'>
                        {' '}
                        Available Seat: {myClass?.availableSeat}
                      </p>
                    </div>
                    <div className='md:text-right'>
                      <p className='text-lg font-semibold'>
                        {' '}
                        Addmission Fee: ${myClass?.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <hr className='my-5 border-gray-300' />
                  <p className=' font-bold'>Instructor information</p>
                  <div className='flex items-center py-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 '>
                    <img
                      className='flex-shrink-0 ring-2 border-2 ring-[#C25934] object-cover mx-1 rounded-full w-12 h-12'
                      src={myClass?.instructor?.thumbnail}
                      alt='img'
                    />
                    <div className='ml-2 flex items-center'>
                      <h1 className='text-base capitalize font-bold text-black dark:text-gray-200'>
                        {myClass?.instructor?.name}
                      </h1>
                    </div>
                  </div>

                  <div className='my-4 space-y-4 md:space-y-0 md:flex items-center justify-between'>
                    <button
                      onClick={() => setShow(!show)}
                      className='px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-[#EFCF4F] hover:bg-[#C25934] focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer'>
                      Book now
                    </button>

                    {show && (
                      <BookingModal
                        show={show}
                        setShow={setShow}
                        myClass={myClass}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleClass
