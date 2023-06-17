import React from 'react'

const UserInfo = ({ user, index, handleRole }) => {
  const { image, name, email, role } = user
  return (
    <tr>
      <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
        {index + 1}
      </td>

      <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center gap-2'>
          <img
            className='flex-shrink-0 ring-2 border-2 ring-[#C25934] object-cover mx-1 rounded-full w-9 h-9'
            src={image}
            alt='img'
          />
          <p className='text-gray-900 capitalize whitespace-no-wrap'>{name}</p>
        </div>
      </td>
      <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{email}</p>
      </td>
      <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap capitalize'>{role}</p>
      </td>

      <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
        <div className='flex gap-2'>
          <p
            onClick={() => handleRole({ ...user, type: 'admin' })}
            className='text-[#C25934] bg-red-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer'>
            Make Admin
          </p>
          <p
            onClick={() => handleRole({ ...user, type: 'instructor' })}
            className='text-white bg-green-500 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer'>
            Make Instructor
          </p>
        </div>
      </td>
    </tr>
  )
}

export default UserInfo
