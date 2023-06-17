import React from 'react'

const ItemRow = ({ myClass, index, handleStatus }) => {
  const { _id, image, title, price, enrolledStudent, status, instructor } =
    myClass
  return (
    <tr>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        {index + 1}
      </td>
      <td className='p-5 border-b border-gray-200 bg-white text-sm'>
        <div className='w-20 h-20 flex items-center'>
          <img alt='product' src={image} />
        </div>
      </td>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <div className='ml-3'>
          <p className='text-gray-900 whitespace-no-wrap'>{title}</p>
        </div>
      </td>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>{' '}
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{instructor?.name}</p>
      </td>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{instructor?.email}</p>
      </td>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap font-bold uppercase'>
          {enrolledStudent}
        </p>
      </td>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
      </td>
      <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
        <div className='flex gap-2'>
          <p
            onClick={() => handleStatus({ id: _id, status: 'approved' })}
            className='text-green-900 bg-green-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer'>
            Approved
          </p>
          <p
            onClick={() => handleStatus({ id: _id, status: 'deny' })}
            className='text-[#C25934] bg-red-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer'>
            Deny
          </p>
          <p className='text-black bg-slate-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer'>
            Feedback
          </p>
        </div>
      </td>
    </tr>
  )
}

export default ItemRow
