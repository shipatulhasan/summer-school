import React from 'react'
import { blogs } from '../../Blog/blogs'
import BlogCard from './BlogCard'
const BlogSection = () => {
  return (
    <div>
      <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <p className='text-base text-gray-700 md:text-lg'>It’s Interesting</p>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black md:text-5xl md:mx-auto'>
            Recent Posts
          </h2>
        </div>
        <div className='grid gap-5 py-2 mb-8 md:grid-cols-3'>
          {blogs.slice(0, 3).map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
