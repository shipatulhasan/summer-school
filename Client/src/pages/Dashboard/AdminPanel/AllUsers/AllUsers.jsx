import React from 'react'
import { Helmet } from 'react-helmet-async'
import toast from 'react-hot-toast'
import Loader from '../../../../components/Spinner/Loader'
import { useUserData } from '../../../../hooks/useUserData'
import BuyerInfo from './UserInfo'
import UserInfo from './UserInfo'
const AllUsers = () => {
  const { users, isLoading, refetch } = useUserData(' ')
  const handleRole = (data) => {
    const confirmUpdate = window.confirm(
      `would you like to make this ${data?.email} as ${data?.type}`
    )
    if (confirmUpdate) {
      fetch(`${import.meta.env.VITE_APP_api}/user-role/${data?._id}`, {
        method: 'put',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('music-school-token')}`
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(`User role successfully updated`)
          refetch()
        })
    }
  }

  return (
    <div className='container mx-auto px-4 sm:px-8 py-8'>
      <Helmet>
        <title>All Users - Music School</title>
      </Helmet>

      {users?.length === 0 && (
        <p className='text-black text-2xl font-bold'>No User's register yet</p>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='min-w-full shadow rounded-lg '>
              <table className='min-w-full leading-normal'>
                <thead className='bg-red-200'>
                  <tr>
                    <th className='px-5 py-3 border-b border-gray-200 text-left'>
                      No
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                      Name
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, i) => (
                    <UserInfo
                      key={user._id}
                      user={user}
                      index={i}
                      handleRole={handleRole}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AllUsers
