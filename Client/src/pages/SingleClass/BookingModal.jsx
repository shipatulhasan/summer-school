import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import LoderText from '../../components/Spinner/LoderText'
import { AuthContext } from '../../contexts/AuthProvider'

const BookingModal = ({ show, setShow, myClass }) => {
  const { user } = useContext(AuthContext)
  const { _id, title, price, image } = myClass
  const [isLoading, setIsloading] = useState(false)
  const handleBooking = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const phone = form.phone.value
    const address = form.address.value

    const bookingInfo = {
      className: title,
      classId: _id,
      price: price,
      name,
      email,
      phone,
      address,
      image
    }

    setIsloading(true)
    setTimeout(() => {
      toast.success('successfully booked')
      setIsloading(false)
      setShow(false)
    }, 2000)
  }

  return (
    <div>
      <div
        className='py-12 bg-gray-700 bg-opacity-50 dark:bg-gray-900 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0'
        id='modal'>
        <div
          role='alert'
          className='container mx-auto w-11/12 md:w-2/3 max-w-lg'>
          <div className='relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400 '>
            <h3 className='text-xl font-bold leading-snug mb-3'>{title}</h3>

            <form action='' className='space-y-4' onSubmit={handleBooking}>
              <div>
                <label className='text-base font-medium leading-none text-gray-800 mb-5'>
                  Name
                  <input
                    aria-label='enter email adress'
                    type='text'
                    name='name'
                    defaultValue={user?.displayName}
                    readOnly
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />
                </label>
              </div>
              <div>
                <label className='text-base font-medium leading-none text-gray-800'>
                  Email
                  <input
                    aria-label='enter email adress'
                    type='email'
                    name='email'
                    defaultValue={user?.email}
                    readOnly
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />
                </label>
              </div>
              <div className='flex justify-between items-center gap-3'>
                <label className='text-base font-medium leading-none text-gray-800'>
                  Price
                  <input
                    aria-label='enter email adress'
                    type='text'
                    name='price'
                    defaultValue={'$' + price}
                    readOnly
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />
                </label>
                <label className='text-base font-medium leading-none text-gray-800'>
                  Phone Number
                  <input
                    aria-label='enter email adress'
                    type='text'
                    name='phone'
                    required
                    placeholder='type your phone number'
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />
                </label>
              </div>

              <div>
                <label className='text-base font-medium leading-none text-gray-800'>
                  Address
                  <input
                    aria-label='enter email adress'
                    type='text'
                    name='address'
                    placeholder='type your address'
                    required
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />
                </label>
              </div>

              <div className='mt-6 flex items-center w-full'>
                <button
                  className='focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-[#EFCF4F] border rounded hover:bg-[#C25934] py-2 px-8'
                  type='submit'>
                  {isLoading ? <LoderText /> : 'Booking'}
                </button>
                <button
                  className='focus:outline-none ml-3 bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-150 text-gray-600 dark:text-gray-400 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'
                  onClick={() => setShow(!show)}>
                  Cancel
                </button>
              </div>
            </form>

            <div
              className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out'
              onClick={() => setShow(!show)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                aria-label='Close'
                className='icon icon-tabler icon-tabler-x'
                width={20}
                height={20}
                viewBox='0 0 24 24'
                strokeWidth='2.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
