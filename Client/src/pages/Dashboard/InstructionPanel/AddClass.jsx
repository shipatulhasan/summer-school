import React from 'react'
import { Helmet } from 'react-helmet-async'
import ClassForm from './ClassForm'

const AddClass = () => {
  return (
    <div className='bg-white border border-slate-400 shadow-xl rounded md:w-1/2 w-full p-10 mt-6 mx-auto'>
      <Helmet>
        <title>Add Class - Music School</title>
      </Helmet>
      <p
        aria-label='Login to your account'
        className='text-3xl font-extrabold text-center leading-6 text-gray-800 '>
        Add a Class
      </p>
      <ClassForm />
    </div>
  )
}

export default AddClass
