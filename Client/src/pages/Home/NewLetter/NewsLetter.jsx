import React from 'react';

const NewsLetter = () => {
    return (
    
        <div className="flex flex-col items-center justify-center max-w-2xl px-4 py-10 mx-auto sm:max-w-xl md:max-w-2xl lg:py-10 md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-gray-700 md:text-lg">
          The best resale bike shop in town. You can get and sell your bike at an affordable price. 
          </p>
        </div>
        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
          <input
            placeholder="Email"
            required=""
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-red-500 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Subscribe
          </button>
        </form>
        <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
        We have so much trusted seller here. So you will get the fresh condition bike for sure. Best of of luck for your deal. Stay with us.
        </p>
     
      </div>
    );
};

export default NewsLetter;

