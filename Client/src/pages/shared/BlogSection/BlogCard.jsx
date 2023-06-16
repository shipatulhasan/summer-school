import React from 'react';

const BlogCard = ({blog}) => {
    const { img, title, category, date, details } = blog;
    return (
        <div className="">
      <div className="flex flex-col max-w-screen-lg overflow-hidden ">
        <div className="bg-white lg:pl-10 space-y-5 ">
          <div>
            <img src={img} alt="" className='w-full object-cover ' />
          </div>
          <div>
            <div className="relative z-10">
              <p className="text-lg font-Bellefair mb-2">{category}</p>
              <h5 className=" font-Bellefair font-normal text-xl leading-tight sm:text-2xl" title={title}>
                {title.slice(0,28)+'...'} 
              </h5>
            </div>
                <p className="capitalize py-3">{date}</p>
            <p className="mb-5 text-gray-800">{details.slice(0,80)+' ...'}</p>
          </div>
        
        </div>
      
      </div>
    </div>
    );
};

export default BlogCard;