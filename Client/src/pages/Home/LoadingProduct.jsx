import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingProduct = () => {
    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5">
        <div className='w-full h-56 rounded sm:h-96'>
         <Skeleton height={300}/>
        </div>
        
        {/*  */}
        <div className='space-y-5 '>
        
        <div>
        
        <div className='space-y-4 md:space-y-0 md:flex justify-between'>
        <div className="space-y-1 w-full">
           <Skeleton />
           <Skeleton count={1.5}/>
           
           </div>
           <div className="md:text-right w-full">
                       <Skeleton count={.5} />
                   </div>
        </div>
        <div className='my-4'>
               <Skeleton />
                   </div>
        </div>
        <hr className=" border-gray-300" />
        <div>
        <h2 className='text-xl font-bold '>
           <Skeleton count={.5} />
        </h2>
        
       <div className='my-5'>
           <Skeleton count={4} />
       </div>
        <hr className="my-5 border-gray-300" />
        
           <h2 className='text-xl font-bold '>
           <Skeleton count={.5} />
        </h2>
       
           <div className="flex items-center gap-4">
          <div>
          <Skeleton width={50} height={50} circle />
          </div>
          <div className="w-1/5">
          <Skeleton count={2} />
          </div>
     
        
        </div>
        
        
        </div>
        </div>
        
        </div>
    );
};

export default LoadingProduct;