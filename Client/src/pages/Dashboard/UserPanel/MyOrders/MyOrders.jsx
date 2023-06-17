import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../../../contexts/AuthProvider'
import { Link } from 'react-router-dom'
import Loader from '../../../../components/Spinner/Loader'
import OrdersRaw from './OrdersRaw'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
const MyOrders = () => {
  const { user } = useContext(AuthContext)

  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${import.meta.env.VITE_APP_api}/booking?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('music-school-token')}`
        }
      })
      .then((data) => {
        console.log(data.data)
        setBookings(data.data)
        setIsLoading(false)
      })
  }, [user?.email, update])

  const handleDelete = (booking) => {
    const confirmcancle = window.confirm(
      `would you like to cancel ${booking.product_title}`
    )
    if (confirmcancle) {
      fetch(`${import.meta.env.VITE_APP_api}/booking/${booking?._id}`, {
        method: 'delete',
        headers: {
          authorization: `Bearer ${localStorage.getItem('music-school-token')}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Booking cancled successfully')
          setUpdate(!update)
          console.log(data)
        })
    }
  }

  return (
    <div className='container mx-auto px-4 sm:px-8 py-8'>
      <Helmet>
        <title>My order - Music School</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {bookings?.length === 0 ? (
            <p className='text-black text-2xl font-bold'>
              No booking booked yet. wanna booke some products ?{' '}
              <Link to='/classes' className='text-[#C25934] font-semibold '>
                Click here
              </Link>
            </p>
          ) : (
            <div className='px-4 sm:px-8 py-4'>
              <div className='min-w-full shadow rounded-lg overflow-x-auto'>
                <table className='min-w-full leading-normal'>
                  <thead className='bg-red-200'>
                    <tr>
                      <th className='px-5 py-3 border-b border-gray-200 text-left'>
                        No
                      </th>
                      <th className='px-5 py-3 border-b border-gray-200 '></th>
                      <th
                        scope='col'
                        className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                        Title
                      </th>

                      <th
                        scope='col'
                        className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                        Price
                      </th>

                      <th
                        scope='col'
                        className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                        Payment
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {bookings.map((booking, i) => (
                      <OrdersRaw
                        key={booking._id}
                        booking={booking}
                        index={i}
                        handleDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default MyOrders
