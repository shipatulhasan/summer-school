import React from "react";
import { useUserData } from "../../../../hooks/useUserData";
import Loader from "../../../../components/Spinner/Loader";
import toast from "react-hot-toast";
import SellerInfo from "./SellerInfo";
import { Helmet } from "react-helmet-async";

const AllSellers = () => {
  const { users, isLoading, refetch } = useUserData("seller");

  const handleDelete = (seller) => {
    const confirmDelete = window.confirm(
      `would you like to delete ${seller?.email}`
    );
    if (confirmDelete) {
      fetch(`${import.meta.env.VITE_APP_api}/user/${seller?._id}`, {
        method: "delete",
        headers: {
          authorization: `Bearer ${localStorage.getItem("music-school-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(`${seller?.email} deleted successfully`);
          refetch();
        });
    }
  };
  const handleVerification = (seller) => {
    delete seller._id;

    const confirmation = window.confirm(
      `would you like to verify ${seller?.email}`
    );

    if (confirmation) {
      fetch(`${import.meta.env.VITE_APP_api}/user/${seller?.email}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("music-school-token")}`,
        },
        body: JSON.stringify({ ...seller, verified: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(`${seller?.email} verified`);
          refetch();
          console.log(data);
        });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <Helmet>
        <title>All Sellers - Music School</title>
      </Helmet>
      {users?.length === 0 && (
        <p className="text-black text-2xl font-bold">
          No <span className="text-4xl text-res-600">seller's</span> register
          yet
        </p>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="min-w-full shadow rounded-lg">
              <table className="min-w-full leading-normal">
                <thead className="bg-red-200">
                  <tr>
                    <th className="px-5 py-3 border-b border-gray-200 text-left">
                      No
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Vrification
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
                  {users.map((seller, i) => (
                    <SellerInfo
                      key={seller._id}
                      seller={seller}
                      index={i}
                      handleDelete={handleDelete}
                      handleVerification={handleVerification}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllSellers;
