import React from "react";
import PageHeader from "../components/PageHeader";
import img from "../assets/banner/motorcycle.jpg";
import CategoryCard from "./shared/CategoriesSection/CategoryCard";
import { useCategories } from "../hooks/useCategories";
import CatSkeleton from "./shared/CategoriesSection/CatSkeleton";
import { Helmet } from "react-helmet-async";

const CategoryPage = () => {
  const [categories, catLoading] = useCategories();
  return (
    <div>
      <Helmet>
        <title>Categories - Biker Point</title>
      </Helmet>
      <PageHeader headerInfo={{ img, title: "Choose your own preference" }} />

      <div className="px-4 py-16 lg:py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8">
        <div className="grid gap-5 py-2 mb-8 md:grid-cols-3">
          {catLoading ? (
            <CatSkeleton cat={6} />
          ) : (
            <>
              {" "}
              {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
