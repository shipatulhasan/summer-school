import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import LoaderText from "../../../components/Spinner/LoderText";
import  format  from 'date-fns/format'
import {AuthContext} from '../../../contexts/AuthProvider'
import { setProductToDb } from '../../../api/products';
import toast from 'react-hot-toast'
import { getImageUrl } from '../../../api/imageUrl';
import {useCategories} from '../../../hooks/useCategories'
import {useRole} from '../../../hooks/useRole'
import { useNavigate } from "react-router-dom";

const ProductForm = () => {

  const{user} = useContext(AuthContext)
  const {verification} = useRole(user?.email)
  const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [categories] = useCategories()

  const handleAddProduct = (data)=>{
    const date = format(new Date(),'PPpp')
    // console.log(data,date,data.img[0])
    setIsLoading(true)
    getImageUrl(data.img[0])
    .then(Imagedata=>{
        const product = {
            title:data.title,
            originalprice:data.originalprice,
            sellprice:data.sellprice,
            image:Imagedata,
            condition:data.condition,
            category:data.category,          
            location:data.location,
            purchase_year:data.purchase,
            description:data.description,
            post_date:date,
            status:'available',
            seller:{
                name:user.displayName,
                email:user.email,
                thumbnail:user.photoURL,
                phoneNo:data.phone,
                verified:verification
            }
    }
    setProductToDb(product)
    .then(data=>{
        console.log(data)
        toast.success('Product added successfully')
        setIsLoading(false)
        navigate('/dashboard/manage-products')
        reset()

       
    })
    .catch(err=>console.error(err.message))
    })
    .catch(err=>console.log(err))
  
}



  return (
    <div>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="space-y-6 "
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-red-500 focus:outline-red-500 rounded "
                {...register("title", { required: "title is required" })}
                id="title"
                type="text"
                placeholder="Title"
              />
              {errors.title && (
                <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                  {errors.title?.message}
                </p>
              )}
            </div>
            <div className=" space-y-1 text-sm">
              <label
                htmlFor="image"
                className=" p-3 rounded cursor-pointer text-gray-500 font-bold "
              >Upload image
                
              </label>
              <input
                  type="file"
                  className="mt-3"
                 
                  {...register("img", { required: "image is required" })}
                  id="image"
                  accept="image/*"
                />
              {errors.img && (
                <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                  {errors.img?.message}
                </p>
              )}
            </div>
            <div className="md:flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="originalprice" className="block text-gray-600">
                  Original Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-red-500 focus:outline-red-500 rounded "
                  {...register("originalprice", { required: "originalprice is required" })}
                  id="originalprice"
                  type="number"
                  placeholder="Original price"
                  required
                />
                {errors.originalprice && (
                  <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                    {errors.originalprice?.message}
                  </p>
                )}
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="sellprice" className="block text-gray-600">
                 Sell Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-red-500 focus:outline-red-500 rounded "
                  {...register("sellprice", { required: "sellprice is required" })}
                  id="sellprice"
                  type="number"
                  placeholder="sellprice"
                  required
                />
                {errors.sellprice && (
                  <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                    {errors.sellprice?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex justify-between gap-2">
            <div className="md:mt-0 w-full md:w-1/2 space-y-1 text-sm">
                <label
                  htmlFor="condition"
                  className="block text-sm  text-gray-900 dark:text-white"
                >
                  Product condition
                </label>
                <select
                  id="condition"
                  className="bg-white border border-red-500 text-gray-900 text-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full px-4 py-3"
                  {...register("condition", {
                    required: "conditon is required",
                  })}
                >
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>

                {errors.condition && (
                  <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                    {errors.condition?.message}
                  </p>
                )}
              </div>
            <div className="mb-4 md:mb-0 w-full md:w-1/2 space-y-1 text-sm">
                <label
                  htmlFor="category"
                  className="block text-sm  text-gray-900 dark:text-white"
                >
                  Product category
                </label>
                <select
                  id="category"
                  className="bg-white border border-red-500 text-gray-900 text-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full px-4 py-3"
                  {...register("category", {
                    required: "category is required",
                  })}
                >{
                    categories.map((cat,i)=><option key={i}>{cat.name}</option>)
                }
                </select>

                {errors.category && (
                  <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                    {errors.category?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 md:mb-0 space-y-1 text-sm">
                <label htmlFor="purchase" className="block text-gray-600">
                  Year of purchase
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-red-500 focus:outline-red-500 rounded "
                  {...register("purchase", { required: "purchase is required" })}
                  id="purchase"
                  type="date"
                  placeholder="Purchase year"
                  required
                />
                {errors.purchase && (
                  <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                    {errors.purchase?.message}
                  </p>
                )}
              </div>
              <div className="md:flex justify-between gap-2">
              <div className="mb-4 md:mb-0 space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-red-500 focus:outline-red-500 rounded "
                {...register("location", { required: "Location is required" })}
                id="location"
                type="text"
                placeholder="Location"
              />
              {errors.location && (
                <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                  {errors.location?.message}
                </p>
              )}
            </div>
              <div className="space-y-1 text-sm">
              <label htmlFor="phone" className="block text-gray-600">
                phone
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-red-500 focus:outline-red-500 rounded "
                {...register("phone", { required: "phone is required" })}
                id="phone"
                type="text"
                placeholder="phone"
              />
              {errors.phone && (
                <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                  {errors.phone?.message}
                </p>
              )}
            </div>
            
              </div>
           
            

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                {...register("description", {
                  required: "description is required",
                })}
                id="description"
                className="block rounded focus:green-300 w-full h-20 px-4 py-3 text-gray-800  border border-red-500 focus:outline-red-500 "
              ></textarea>
              {errors.description && (
                <p className="my-2 p-2 bg-red-200 font-bold text-red-500">
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className="mt-8">
              <button
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-4 w-full"
                type="submit"
              >
                {isLoading ? <LoaderText /> : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
