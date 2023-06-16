import React from "react";
import { Helmet } from "react-helmet-async";
import blog from "../../assets/banner/Blog.jpg";
import PageHeader from "../../components/PageHeader";
import SingleBlog from "./SingleBlog";
import { blogs } from "./blogs";
import BlogSidebar from "./BlogSidebar";

const BlogPage = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - Music School</title>
      </Helmet>
      <PageHeader headerInfo={{ img: blog, title: "Blogs" }} />
      <div className="grid grid-cols-1 md:grid-cols-4 space-y-5 md:space-y-0 md:gap-4 py-20 relative">
        <div className="col-span-3">
          {blogs.map((blog, i) => (
            <SingleBlog key={i} blog={blog} index={i === blogs.length - 1} />
          ))}
        </div>
        <div className="md:h-screen md:sticky md:top-0 md:py-3">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
