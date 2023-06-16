import React from 'react';
import { Helmet } from 'react-helmet-async';

import ProductForm from './ProductForm';



const AddProduct = () => {
    
    return (
        <div className="bg-white border border-slate-400 shadow-xl rounded md:w-1/2 w-full p-10 mt-6 mx-auto">
           <Helmet>
        <title>Add Product - Biker Point</title>
      </Helmet>
        <p
          aria-label="Login to your account"
          className="text-3xl font-extrabold text-center leading-6 text-gray-800 "
        >
          Add a Product
        </p>
      <ProductForm />
       </div>
    );
};

export default AddProduct;