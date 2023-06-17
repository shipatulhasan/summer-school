import React from 'react'
import Loader from '../../../../components/Spinner/Loader'
import toast from 'react-hot-toast'
import ItemRow from './ItemRow'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

const ManageClasses = () => {
  const {
    data: myClasses,
    refetch,
    isLoading
  } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_APP_api}/all-classes`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('music-school-token')}`
        }
      })
      const data = await res.json()
      return data
    }
  })
  const handleStatus = (data) => {
    const confirmUpdate = window.confirm(
      `would you like to ${data?.status} this class?`
    )
    console.log(data.id)
    if (confirmUpdate) {
      fetch(`${import.meta.env.VITE_APP_api}/update-class/${data?.id}`, {
        method: 'put',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('music-school-token')}`
        },
        body: JSON.stringify({ status: data?.status })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          toast.success(`staus updated`)
          refetch()
        })
    }
  }

  if (isLoading) {
    return <Loader height={'min-h-[60vh]'} />
  }

  return (
    <div className='container mx-auto px-4 sm:px-8 py-8'>
      <Helmet>
        <title>Reported Products - Music School</title>
      </Helmet>

      <div className='px-4  py-4 overflow-x-auto'>
        {myClasses?.length < 1 ? (
          <p className='text-black text-2xl font-bold'>
            No Reported item Found.
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
                          Class
                        </th>

                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Price
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Instructor name
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Instructor email
                        </th>
                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Enrolled
                        </th>

                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Status
                        </th>

                        <th
                          scope='col'
                          className='px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'>
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {myClasses.map((myClass, i) => (
                        <ItemRow
                          key={myClass._id}
                          myClass={myClass}
                          handleStatus={handleStatus}
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

export default ManageClasses
