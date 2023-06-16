import React from "react";
import Loader from "../../../../components/Spinner/Loader";
import toast from "react-hot-toast";
import ItemRow from "./ItemRow";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const ReportedProduct = () => {
  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reported-product"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_APP_api}/reported-product`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "music-school-token"
            )}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader height={"min-h-[60vh]"} />;
  }

  const handleDelete = (product) => {
    const confirmDelete = window.confirm(
      `would you like to delete ${product?.title}`
    );
    if (confirmDelete) {
      fetch(
        `${import.meta.env.VITE_APP_api}/reported-product/${product?._id}`,
        {
          method: "delete",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "music-school-token"
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          toast.success(`${product?.title} deleted successfully`);
          console.log(data);
          refetch();
        });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <Helmet>
        <title>Reported Products - Music School</title>
      </Helmet>

      <div className="px-4  py-4 overflow-x-auto">
        {products?.length < 1 ? (
          <p className="text-black text-2xl font-bold">
            No Reported item Found.
          </p>
        ) : (
          <>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <div className="min-w-full shadow rounded-lg overflow-x-auto">
                  <table className="min-w-full leading-normal">
                    <thead className="bg-red-200">
                      <tr>
                        <th className="px-5 py-3 border-b border-gray-200 text-left">
                          No
                        </th>
                        <th className="px-5 py-3 border-b border-gray-200 "></th>
                        <th
                          scope="col"
                          className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                        >
                          Title
                        </th>

                        <th
                          scope="col"
                          className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                        >
                          Condition
                        </th>

                        <th
                          scope="col"
                          className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {products.map((product, i) => (
                        <ItemRow
                          key={product._id}
                          product={product}
                          index={i}
                          handleDelete={handleDelete}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ReportedProduct;
