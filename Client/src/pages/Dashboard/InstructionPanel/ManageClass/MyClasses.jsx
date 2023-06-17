import React, { useContext } from 'react'
import Loader from '../../../../components/Spinner/Loader'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../../../contexts/AuthProvider'
import TableRow from './TableRow'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const MyClasses = () => {
  const { user } = useContext(AuthContext)

  const {
    isLoading,
    data: classes,
    refetch
  } = useQuery({
    queryKey: ['classes', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_APP_api}/classes?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              'music-school-token'
            )}`
          }
        }
      )
      const data = await res.json()
      return data
    }
  })

  return (
    <div className='container mx-auto px-4 sm:px-8 py-8'>
      <Helmet>
        <title>My Classes - Music School</title>
      </Helmet>

      <div className='px-4  py-4 overflow-x-auto'>
        {classes?.length < 1 ? (
          <p className='text-black text-2xl font-bold'>
            No Classes added yet. wanna add new Class?{' '}
            <Link
              to='/dashboard/add-class'
              className='text-[#C25934] font-semibold '>
              Click here
            </Link>
          </p>
        ) : (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <>
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
                          Enrolled Student
                        </th>

                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Status
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Feedback
                        </th>

                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {classes.map((myClass, i) => (
                        <TableRow
                          key={myClass._id}
                          myClass={myClass}
                          index={i}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default MyClasses
