import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
const MyOrders = () => {
  return (
    <div className='container mx-auto px-4 sm:px-8 py-8'>
      <Helmet>
        <title>My order - Music School</title>
      </Helmet>

      <p className='text-black text-2xl font-bold'>
        Don't take a admission yet. check our new classes ?{' '}
        <Link to='/classes' className='text-[#C25934] font-semibold '>
          Click here
        </Link>
      </p>
    </div>
  )
}

export default MyOrders
