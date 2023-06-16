import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './slider.css'

// import required modules
import { Pagination } from "swiper";

import bike1 from '../../../assets/banner/bike-1.png'
import bike2 from '../../../assets/banner/bike-2.png'
import brand from '../../../assets/brand/logo-png1.png'

const Slider = () => {
    const sildes = [
        {img:bike1,text:'BOOK YOUR BIKE INSTANTLY AND ENJOY DISCOUNT',brand},
        {img:bike2,text:'BOOK YOUR BIKE INSTANTLY AND ENJOY DISCOUNT',brand}
    ]
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return (
        <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
            {
                sildes.map((slide,i)=><SwiperSlide className='relative' key={i}>
                    <img className='mx-auto slide-img' src={slide.img} alt="" />
                    <div className='px-2 md:px-16 lg:px-20  w-full '>
                        <div className='flex gap-2 md:gap-4 items-center'>
                            <p className='text-xs md:text-lg'>{slide.text}</p>
                            <img className='w-12 md:w-20' src={slide.brand} alt="" />
                        </div>
                        <h2 className='text-5xl md:text-8xl lg:text-9xl font-bold uppercase'>
                        <span className='text-red-600 '>Biker</span>point
                        </h2>
                    </div>
                </SwiperSlide>)
            }
          
          
        </Swiper>
      </>
    );
};

export default Slider;