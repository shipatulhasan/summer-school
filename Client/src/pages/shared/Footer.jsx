import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import brand from "../../assets/brand/logo-png1.png";
import payment from "../../assets/payment.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 pt-16 bg-[#0C0C0C] border-t-4 border-[#EFCF4F]  sm:max-w-xl md:max-w-full  md:px-8 ">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 text-slate-100">
        <div className="sm:col-span-2">
          <Link to="/">
            <img className="w-1/2" src={brand} alt="" />
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide ">Contacts</p>
          <div className="flex">
            <p className="mr-1 ">Phone:</p>
            <a
              href="tel:01819051432"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300  hover:text-deep-purple-800"
            >
              01819051432
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Email:</p>
            <a
              href="mailto:ziaulhasanshaon006@gmail.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300  hover:text-deep-purple-800"
            >
              ziaulhasanshaon006@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Address:</p>
            <p className="transition-colors duration-300 ">
              312 Omeca Street, NY
            </p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide ">Social</span>
          <div className="flex items-center mt-2 space-x-3 text-[#EFCF4F]">
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
          </div>
          <p className="mt-4 text-sm ">
            The best music school in town. Best of of luck for your future. If
            any query don't forget to contact us.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-slate-700 lg:flex-row">
        <p className="text-sm text-slate-100">
          © Copyright 2022 Music School. All rights reserved.
        </p>
        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default Footer;
