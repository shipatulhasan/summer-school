import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import LoaderText from '../../../components/Spinner/LoderText'
import format from 'date-fns/format'
import { AuthContext } from '../../../contexts/AuthProvider'
import { setClassToDB } from '../../../api/addclass'
import toast from 'react-hot-toast'
import { getImageUrl } from '../../../api/imageUrl'
import { useRole } from '../../../hooks/useRole'
import { useNavigate } from 'react-router-dom'

const ClassForm = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const handleAddProduct = (data) => {
    const date = format(new Date(), 'PPpp')
    // console.log(data,date,data.img[0])
    setIsLoading(true)
    getImageUrl(data.img[0])
      .then((Imagedata) => {
        const newClass = {
          title: data.title,
          image: Imagedata,
          price: data.price,
          availableSeat: data.seat,
          status: 'pending',
          enrolledStudent: 0,
          instructor: {
            name: user.displayName,
            email: user.email,
            thumbnail: user.photoURL,
            phoneNo: data.phone
          }
        }
        console.log(newClass)
        setClassToDB(newClass)
          .then((data) => {
            console.log(data)
            toast.success('Class added successfully')
            setIsLoading(false)
            navigate('/dashboard/my-class')
            reset()
          })
          .catch((err) => console.error(err.message))
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div className='flex justify-center mt-6'>
        <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className='space-y-6 '>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-[#EFCF4F] focus:outline-[#EFCF4F] rounded '
                {...register('title', {
                  required: 'Class Name is required'
                })}
                id='title'
                type='text'
                placeholder='Class Name'
              />
              {errors.className && (
                <p className='my-1 p-1 bg-red-200 font-bold text-red-600'>
                  {errors.className?.message}
                </p>
              )}
            </div>
            <div className=' space-y-1 text-sm'>
              <label
                htmlFor='image'
                className=' p-3 rounded cursor-pointer text-gray-500 font-bold '>
                Upload image
              </label>
              <input
                type='file'
                className='mt-3'
                {...register('img', { required: 'image is required' })}
                id='image'
                accept='image/*'
              />
              {errors.img && (
                <p className='my-2 p-2 bg-red-200 font-bold text-red-600'>
                  {errors.img?.message}
                </p>
              )}
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='className' className='block text-gray-600'>
                Instructor Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-[#EFCF4F] focus:outline-[#EFCF4F] rounded '
                {...register('instructorName')}
                id='className'
                readOnly
                value={user?.displayName}
                type='text'
                placeholder='Instructor Name'
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='className' className='block text-gray-600'>
                Instructor Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-[#EFCF4F] focus:outline-[#EFCF4F] rounded '
                {...register('instructorEmail')}
                id='instructorEmail'
                readOnly
                value={user?.email}
                type='text'
                placeholder='Instructor Name'
              />
            </div>
            <div className='md:flex justify-between gap-2'>
              <div className='md:mt-0 w-full md:w-1/2 space-y-1 text-sm'>
                <label
                  htmlFor='seat'
                  className='block text-sm  text-gray-900 dark:text-white'>
                  Available Seat
                </label>
                <select
                  id='seat'
                  className='bg-white border border-[#EFCF4F] text-gray-900 text-sm rounded focus:outline-none focus:ring-[#EFCF4F] focus:border-[#EFCF4F] block w-full px-4 py-3'
                  {...register('seat', {
                    required: 'conditon is required'
                  })}>
                  {Array(100)
                    .fill(0)
                    .map((_, i) => (
                      <option>{i}</option>
                    ))}
                </select>

                {errors.seat && (
                  <p className='my-2 p-2 bg-red-200 font-bold text-red-600'>
                    {errors.seat?.message}
                  </p>
                )}
              </div>
              <div className='md:mt-0 w-full md:w-1/2 space-y-1 text-sm'>
                <label
                  htmlFor='price'
                  className='block text-sm  text-gray-900 dark:text-white'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-[#EFCF4F] focus:outline-[#EFCF4F] rounded '
                  {...register('price', {
                    required: 'Price is required'
                  })}
                  id='price'
                  type='text'
                  placeholder='price'
                />
                {errors.price && (
                  <p className='my-1 p-1 bg-red-200 font-bold text-red-600'>
                    {errors.price?.message}
                  </p>
                )}
              </div>
            </div>
            <div className='mt-8'>
              <button
                aria-label='create my account'
                className='focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-[#EFCF4F] border rounded hover:bg-[#C25934] py-4 w-full'
                type='submit'>
                {isLoading ? <LoaderText /> : 'Add Class'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ClassForm
