import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import brand from "../../assets/brand/logo-png1.png";
import payment from "../../assets/payment.png";

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-4 pt-16 bg-slate-100 border-t-4 border-red-500  sm:max-w-xl md:max-w-full  md:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
              <Link to="/">
                <img className="w-1/2" src={brand} alt="" />
              </Link>
        
           
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-black">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-black">Phone:</p>
              <a
                href="tel:01819051432"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-black hover:text-deep-purple-800"
              >
                01819051432
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-black">Email:</p>
              <a
                href="mailto:shipatulhasan328@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-black hover:text-deep-purple-800"
              >
                shipatulhasan328@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-black">Address:</p>
              <p
                
                className="transition-colors duration-300 text-black"
              >
                312 Omeca Street, NY
              </p>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-black">
              Social
            </span>
            <div className="flex items-center mt-2 space-x-3 text-red-500">
              <FaTwitter />
              <FaFacebook />
              <FaLinkedin />
            </div>
            <p className="mt-4 text-sm text-black">
            The best resale bike shop in town. You can get and sell your bike at an affordable price. We have so much trusted seller here. So you will get the fresh condition bike for sure. Best of of luck for your deal. If faced any problem don't forget to contact us.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-slate-700 lg:flex-row">
          <p className="text-sm text-black">
            © Copyright 2022 Biker point. All rights reserved.
          </p>
          <img src={payment} alt="" />
        </div>
      </div>
    );
};

export default Footer;