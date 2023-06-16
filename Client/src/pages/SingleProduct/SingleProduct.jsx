import React from "react";
import PageHeader from "../../components/PageHeader";
import ProductsCard from "./ProductsCard";
import { useCategories } from "../../hooks/useCategories";
import { useLocation, useParams } from "react-router-dom";
import CategorySidebar from "./CategorySidebar";

import toast from "react-hot-toast";
import { setReportedProduct } from "../../api/products";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SingleProductLoading from "./SingleProductLoading";

const SingleProduct = () => {
  const [categories, catLoading] = useCategories();

  const { id } = useParams();

  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["category", id],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_APP_api}/category/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("biker-point-token")}`,
        },
      }).then((res) => res.json()),
  });

  const { state } = useLocation();
  // const navigation = useNavigation();

  const handleReport = (product) => {
    setReportedProduct(product)
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("You reported this product");
          refetch();
        }
      })
      .catch((err) => console.error(err.message));
  };

  if (isLoading || catLoading) {
    return <SingleProductLoading />;
  }
  return (
    <div>
      <Helmet>
        <title>{state?.name ? state?.name : "category"} - Biker Point</title>
      </Helmet>
      <PageHeader headerInfo={{ img: state?.img, title: state?.name }} />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:py-20">
        <div className="grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-5 ">
          <div className="bg-white border border-slate-200 shadow-lg shadow-slate-300 ">
            <h2 className="text-2xl font-semibold p-5 ">Other Categories</h2>
            {categories.map((cat, i) => (
              <CategorySidebar
                key={cat._id}
                cat={cat}
                lastItem={i === categories.length - 1}
              />
            ))}
          </div>
          <div className="md:col-span-4 space-y-8 md:space-y-10">
            {products.length === 0 && (
              <h2 className="text-center text-2xl font-semibold p-5 ">
                No Products Available
              </h2>
            )}
            {products.map((product) => (
              <ProductsCard
                key={product._id}
                product={product}
                handleReport={handleReport}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
