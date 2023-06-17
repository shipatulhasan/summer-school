import React from 'react'

const TableRow = ({ myClass, index }) => {
  const { image, title, price, enrolledStudent, status } = myClass
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
      </td>

      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap font-bold uppercase'>
          {enrolledStudent}
        </p>
      </td>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{status}</p>
      </td>
      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{myClass?.feedBack}</p>
      </td>

      <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p className='text-green-900 bg-green-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer'>
          Update
        </p>
      </td>
    </tr>
  )
}

export default TableRow
