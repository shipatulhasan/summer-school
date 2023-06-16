import React from 'react';
import { Link } from 'react-router-dom';
import './category.css'

const CategoryCard = ({category}) => {
  const {img,name,_id} = category
    return (
        <Link to ={`/category/${_id}`} state={category} >
              <div className="relative overflow-hidden  rounded shadow border border-slate-200 box hover:cursor-pointer" >
            
                <img className='rounded object-cover w-full h-80' src={img} alt="" />
              
             
            <div className='absolute bottom-0 w-full z-10 px-6 py-4 bg-black bg-opacity-75'>
            <h6 className="mb-2 text-5xl uppercase text-slate-200 font-extrabold leading-5">{name}</h6>
            </div>
         
      
        </div>
        </Link>
    );
};

export default CategoryCard;