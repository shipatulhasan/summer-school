import React, { useState } from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { MdVerified } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import BookingModal from "./BookingModal";

const ProductsCard = ({ product, handleReport }) => {
  const {
    title,
    originalprice,
    sellprice,
    condition,
    location,
    purchase_year,
    description,
    post_date,
    seller,
  } = product;

  const [show, setShow] = useState(false);
  const [imgLoading,setImgLoading] = useState(false)

  const post_time = formatDistanceToNowStrict(new Date(post_date), {
    addSuffix: true,
  });
  const useage = formatDistanceToNowStrict(new Date(purchase_year));

  return (
    <div className="grid gap-10 lg:grid-cols-2 items-center border border-slate-200 shadow-lg shadow-slate-200 p-5">
      <div>
        <img
          className={`${!imgLoading?'blur-md':'blur-none'}object-contain w-full h-56 rounded sm:h-96`}
          src={product?.image}
          onLoad={()=>setImgLoading(true)}
          alt=""
        />
      </div>

      {/*  */}
      <div className="space-y-5 ">
        <div
          className={`space-y-2 md:space-y-0 ${
            product?.reported && "md:flex justify-between items-center gap-1"
          } `}
        >
          {product?.reported ? (
            <p className="text-red-700 font-bold flex gap-2 items-center">
              <MdReportGmailerrorred /> Reported by a customer
            </p>
          ) : (
            " "
          )}
          <p className="text-sm md:text-right"> posted {post_time}</p>
        </div>

        <div>
          <div className="space-y-4 md:space-y-0 md:flex justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-bold leading-snug sm:pr-8">
                {title}
              </h3>
              <p className="text-sm text-gray-600">Location: {location}</p>
            </div>
            <div className="md:text-right">
              <p className="text-lg font-semibold">
                {" "}
                Resale Price: ${sellprice}
              </p>
              <p className="text-sm">Original price: ${originalprice}</p>
            </div>
          </div>
          <div className="my-4">
            <p className="text-sm font-semibold"> Years of use: {useage}</p>
            <p className="text-sm font-semibold">Condition: {condition}</p>
          </div>
        </div>
        <hr className=" border-gray-300" />
        <div>
          <h2 className="text-xl font-bold ">Description</h2>

          <p className="my-3 text-sm text-gray-900">
            {description?.length > 250
              ? description.slice(0, 250) + "..."
              : description}
          </p>
          <hr className="my-5 border-gray-300" />
          <p className=" font-bold">Seller information</p>
          <div className="flex items-center py-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 ">
            <img
              className="flex-shrink-0 ring-2 border-2 ring-red-600 object-cover mx-1 rounded-full w-12 h-12"
              src={seller?.thumbnail}
              alt="img"
            />
            <div className="ml-2 flex items-center">
              <h1 className="text-base capitalize font-bold text-black dark:text-gray-200">
                {seller?.name}
              </h1>
              {seller?.verified && (
                <MdVerified className="text-blue-700 text-lg" />
              )}
            </div>
          </div>

          <div className="my-4 space-y-4 md:space-y-0 md:flex items-center justify-between">
            <button
              onClick={() => setShow(!show)}
              className="px-6 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none capitalize hover:cursor-pointer"
            >
              Book now
            </button>
            {
              !product?.reported && 
              <button
                onClick={() => handleReport(product)}
                className="text-red-700 bg-red-200 rounded px-3 py-1 hover:cursor-pointer flex items-center gap-2 font-bold"
              >
              
                    <MdReportGmailerrorred className="font-bold" />
                    Report product
           
              </button>
            }

            {show && (
              <BookingModal show={show} setShow={setShow} product={product} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
