import React from "react";
import { blogs } from "./blogs";
import { FiMail, FiPhone } from "react-icons/fi";
import bg from "../../assets/blog/blog-hm-3.jpg";

const BlogSidebar = () => {
  return (
    <div className="space-y-8 mx-auto w-11/12 md:w-64">
      <div>
        <h2 className="text-black font-Bellefair font-normal text-3xl pb-3">
          All Blogs
        </h2>

        {blogs.map((blog, i) => (
          <div
            key={i}
            className="flex items-center gap-5 py-3 border-b border-b-[#EFCF4F]"
          >
            <img src={blog.img} className="w-20 h-16" alt="" />
            <div>
              <p className="text-sm font-Bellefair mb-2">{blog.category}</p>
              <h5 className=" font-Bellefair font-normal leading-tight ">
                {blog.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
      {/* banner */}
      <div
        className="rounded px-3 py-5 bg-black bg-opacity-75 bg-blend-overlay bg-no-repeat bg-cover text-slate-100 space-y-6 h-72  "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <h2 className=" font-Bellefair font-normal text-2xl pb-3">
            Have Any Question?
          </h2>
          <p className="text-sm">
            Please contact us via phone or email given below. We will try to
            provide a solution as soon as possible.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FiPhone className="text-[#EFCF4F]" />
            <a href="tel:01819051432">01819051432</a>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-[#EFCF4F]" />
            <a className="" href="mailto:shipatulhasan328@gmail.com">
              shipatulhasan328@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
