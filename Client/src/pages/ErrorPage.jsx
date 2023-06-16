import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/banner/404-error-page-not-found.jpg'

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
       
<section className="flex items-center h-full min-h-screen p-4 dark:bg-gray-900 dark:text-gray-100 bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${img})`}}>
<Helmet>
        <title>404 - Biker Point</title>
      </Helmet>
	<div className="container flex items-center justify-center w-full md:w-1/2  px-5 mx-auto py-8 bg-white bg-opacity-60 rounded-sm shadow-xl shadow-slate-200">
		<div className="md:max-w-lg text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>{error.status}
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<div className='text-center'>
            <Link to='/' className='text-red-700 bg-red-200 rounded px-8 py-3 hover:cursor-pointer gap-2 font-bold'>Back to homepage</Link>
            </div>
		</div>
	</div>
</section>
    );
};

export default ErrorPage;
