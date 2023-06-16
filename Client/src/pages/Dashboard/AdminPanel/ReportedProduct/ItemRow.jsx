
import React from 'react';

const ItemRow = ({product,handleDelete,index}) => {
  const {image,title,sellprice,category,condition} = product
    return (
        <tr>
          <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
            {index+1}
          </td>
          <td className='p-5 border-b border-gray-200 bg-white text-sm'>
          <div className='w-20 h-20 flex items-center'>
                <img
                  alt='product'
                  src={image}
                />
              </div>
          </td>
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
          
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap'>
                {title}
              </p>
           
          </div>
        </td>
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>
            ${sellprice}
          </p>
        </td>
     
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap font-bold uppercase'>
            {category}
          </p>
        </td>
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>
            {condition}
          </p>
        </td>
     
        
   
       
        <td className='px-5 font-bold border-b border-gray-200 bg-white text-sm'>
        <p onClick={()=>handleDelete(product)} className='text-red-600 bg-red-200 text-center font-semibold rounded-full px-2 py-1 hover:cursor-pointer'>
            Delete
          </p>
        </td>
      </tr>
    );
};

export default ItemRow;