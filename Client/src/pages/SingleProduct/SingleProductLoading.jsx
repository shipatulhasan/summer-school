import React from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingProduct from '../Home/LoadingProduct';

const SingleProductLoading = () => {
    return (
        <div>
             <div className='w-full'>
             <Skeleton height={400} />
             </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:py-20">
                <div className='grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-5 '>
                    <div className='bg-white border border-slate-200 shadow-lg shadow-slate-300 text-center'>
                        <div className='p-2'>

                   <Skeleton style={{marginTop:'.5rem',padding:'.2rem'}}/>
                        </div>
                        <Skeleton count={6} style={{marginTop:'2rem',padding:'1.3rem'}} />

                    </div>
                    <div className='md:col-span-4 space-y-8 md:space-y-10'>
                
                    <LoadingProduct/>
                    
                    </div>

        
                </div>
        
          

        </div>
        </div>
    );
};

export default SingleProductLoading;