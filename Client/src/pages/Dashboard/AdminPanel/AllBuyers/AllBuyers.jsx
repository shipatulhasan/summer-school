import React from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Loader from "../../../../components/Spinner/Loader";
import { useUserData } from "../../../../hooks/useUserData";
import BuyerInfo from "./BuyerInfo";
const AllBuyers = () => {
  const { users, isLoading, refetch } = useUserData("user");
  const handleDelete = (user) => {
    const confirmDelete = window.confirm(
      `would you like to delete ${user.email}`
    );
    if (confirmDelete) {
      fetch(`${import.meta.env.VITE_APP_api}/user/${user?._id}`, {
        method: "delete",
        headers: {
          authorization: `Bearer ${localStorage.getItem("biker-point-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(`${user.email} deleted successfully`);
          refetch();
          console.log(data);
        });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <Helmet>
        <title>All Buyers - Biker Point</title>
      </Helmet>

      {users?.length === 0 && (
        <p className="text-black text-2xl font-bold">No User's register yet</p>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="min-w-full shadow rounded-lg ">
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
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((buyer, i) => (
                    <BuyerInfo
                      key={buyer._id}
                      buyer={buyer}
                      index={i}
                      handleDelete={handleDelete}
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

export default AllBuyers;
