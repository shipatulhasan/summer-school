import React from 'react'
import PageHeader from '../components/PageHeader'
import image from '../assets/banner/SLIDE1.jpg'
import { Helmet } from 'react-helmet-async'
import { useClasses } from '../hooks/useClasses'
import ClassCard from './shared/ClassSection/ClassCard'
import CatSkeleton from './shared/ClassSection/CatSkeleton'

const ClassPage = () => {
  const [classes, catLoading] = useClasses()
  return (
    <div>
      <Helmet>
        <title>Classes - Music School</title>
      </Helmet>
      <PageHeader headerInfo={{ image, title: 'Choose your own preference' }} />

      <div className='px-4 py-16 lg:py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8'>
        <div className='grid gap-5 py-2 mb-8 md:grid-cols-3'>
          {catLoading ? (
            <CatSkeleton cat={6} />
          ) : (
            <>
              {' '}
              {classes.map((myClass) => (
                <ClassCard key={myClass._id} myClass={myClass} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ClassPage
