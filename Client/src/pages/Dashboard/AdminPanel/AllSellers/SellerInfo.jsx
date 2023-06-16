import React from 'react';
import { MdVerified } from "react-icons/md";

const SellerInfo = ({seller,index,handleDelete,handleVerification}) => {
    const {image,name,email} = seller
    return (
        <tr>
          <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
            {index+1}
          </td>
     
        <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
            <div className='flex items-center gap-2'>
            <img
              className="flex-shrink-0 ring-2 border-2 ring-red-600 object-cover mx-1 rounded-full w-9 h-9"
              src={image}
              alt="img"
            />
            <p className='text-gray-900 capitalize whitespace-no-wrap flex'>
                {name}
                {
                    seller?.verified &&  <MdVerified className='text-blue-700 text-lg' /> 
                }
              </p>

            </div>
 
        </td>
        <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>
            {email}
          </p>
        </td>
      
        <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>
            {seller?.verified ? 'Verified' : 'Unverified'}
          </p>
        </td>
     
     
       
        <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
            {
                !seller?.verified &&  <p onClick={()=>handleVerification(seller)} className='text-green-900 bg-green-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer hover:bg-green-800 hover:text-green-50 transition-colors duration-150'>
                Verify
              </p>
            }
       
          </td>
        <td className='px-5 py-4 font-bold border-b border-gray-200 bg-white text-sm'>
        <p onClick={()=>handleDelete(seller)} className='text-red-600 bg-red-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer hover:bg-red-600 hover:text-red-100 transition-colors duration-150'>
            Delete
          </p>
        </td>
      </tr>
    );
};

export default SellerInfo;