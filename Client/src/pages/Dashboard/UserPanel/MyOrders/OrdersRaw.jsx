
import React from 'react';
import { Link } from 'react-router-dom';

const OrdersRaw = ({booking,index,handleDelete}) => {
  const {image,product_title,price} = booking
    return (
        <tr>
          <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
            {index+1}
          </td>
          <td className='p-5 border-b border-gray-200 bg-white text-sm'>
          <div className='w-20 h-20 flex items-center'>
                <img
                  alt='booking'
                  src={image}
                />
              </div>
          </td>
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
          
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>
                {product_title}
              </p>
           
          </div>
        </td>
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>
            $ {price}
          </p>
        </td>
     
   
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm capitalize'>
          {
            booking?.paid  ? 
            <button disabled  className='bg-blue-200 text-blue-700 text-center font-semibold rounded-full px-5 py-1'>Paid</button>
            :
            <Link to={`/dashboard/${booking?._id}`} className='text-green-900 bg-green-200 text-center font-semibold rounded-full px-5 py-1'>Pay</Link>

          }
          
          
        </td>
       
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <button onClick={()=>handleDelete(booking)} className='text-red-600 bg-red-200 text-center font-semibold rounded-full px-5 py-1 hover:cursor-pointer'>
            Cancel
          </button>
        </td>
      </tr>
    );
};

export default OrdersRaw;