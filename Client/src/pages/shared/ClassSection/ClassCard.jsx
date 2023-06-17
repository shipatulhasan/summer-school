import React from 'react'
import { Link } from 'react-router-dom'
import './category.css'

const ClassCard = ({ myClass }) => {
  const { image, title, _id } = myClass
  return (
    <Link to={`/class/${_id}`} state={myClass}>
      <div className='relative overflow-hidden  rounded shadow border border-slate-200 box hover:cursor-pointer'>
        <img className='rounded object-cover w-full h-80' src={image} alt='' />

        <div className='absolute bottom-0 w-full z-10 px-6 py-4 bg-black bg-opacity-75'>
          <h6 className='mb-2 text-2xl uppercase text-slate-200 font-extrabold leading-5'>
            {title}
          </h6>
        </div>
      </div>
    </Link>
  )
}

export default ClassCard
