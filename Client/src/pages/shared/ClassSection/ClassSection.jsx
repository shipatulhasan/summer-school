import React from 'react'

import { useClasses } from '../../../hooks/useClasses'
import CatSkeleton from './CatSkeleton'
import ClassCard from './ClassCard'

const ClassSection = () => {
  const [classes, catLoading] = useClasses()

  return (
    <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black md:text-5xl md:mx-auto'>
          Popular Classes
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          You can choose your favourite bike from here. Click on category to
          check that your favorite one is available or not. Don't waste your
          time.
        </p>
      </div>
      <div className='grid gap-5 py-2 mb-8 md:grid-cols-3'>
        {catLoading ? (
          <CatSkeleton cat={3} />
        ) : (
          <>
            {classes.slice(0, 3).map((myClass) => (
              <ClassCard key={myClass._id} myClass={myClass} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default ClassSection
