import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdVerified } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './ad.css'

// import required modules
import { Navigation } from "swiper";

const Advertise = ({advertises}) => {

    return (
        <div className='px-10'>
        <h2 className="text-center py-6 font-sans text-3xl font-bold leading-none tracking-tight text-black md:text-5xl">
            Featured
          </h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          grabCursor={true}
          className="mySwiper"
        >
            {
                advertises.map(ad=><SwiperSlide key={ad._id} className='relative pt-10'>
                <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5">
        <div>
         <img
           className="object-contain w-full h-56 rounded sm:h-96"
           src={ad?.image}
           alt=""
         />
        </div>
        
        {/*  */}
        <div className='space-y-5 '>
        
        <div>
        
        <div className='space-y-4 md:space-y-0 md:flex justify-between'>
        <div className="space-y-1">
           <h3 className="text-xl font-bold leading-snug sm:pr-8">{ad?.title}</h3>
           <p className="text-sm text-gray-600">Location: {ad?.location}</p>
           </div>
           <div className="md:text-right">
                       <p className="text-lg font-semibold"> Sale Price: ${ad?.sellprice}</p>
                   </div>
        </div>
        <div className='my-4'>
               
                       <p className="text-sm font-semibold">Condition: {ad?.condition}</p>
                   </div>
        </div>
        <hr className=" border-gray-300" />
        <div>
        <h2 className='text-xl font-bold '>
           Description
        </h2>
        
        <p className="my-3 text-sm text-gray-900">
         {ad?.description.length > 200 ? ad?.description.slice(0,200)+'...': ad?.description}
        </p>
        <hr className="my-5 border-gray-300" />
         <p className=" font-bold">Seller information</p>
         <div
        
        className="flex items-center py-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 "
        >
        <img
         className="flex-shrink-0 ring-2 border-2 ring-red-600 object-cover mx-1 rounded-full w-12 h-12"
         src={ad?.seller?.thumbnail}
         alt="img"
        />
        <div className="ml-2 flex items-center">
         <h1 className="text-base font-bold text-black dark:text-gray-200">
         {ad?.seller?.name}
         </h1>
         {
           ad?.seller?.verified && <MdVerified className='text-blue-700 text-lg' />
         }
         
        
        </div>
        </div>
        
        
        </div>
        </div>
        
        </div>
           </SwiperSlide>)
            }
          
          
        </Swiper>
      </div>
    );
};

export default Advertise;

