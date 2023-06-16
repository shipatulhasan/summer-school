import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {  FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AuthContext } from "../../../contexts/AuthProvider";

const UserProfile = () => {
  
  const [isClicked, setIsClicked] = useState(false);
  const {user,logOut} = useContext(AuthContext)


  const handleLogOut = ()=>{
    logOut()
    .then(()=>{ 
      toast.success('Successfully logout')
    })
    .catch(err=>console.error(err.message))
  }


  return (
    <div className="relative ">
      {/* <!-- Dropdown toggle button --> */}
      <button 
      onClick={() => setIsClicked(!isClicked)}
      className="flex items-center focus:outline-none"
      >
         <div className="w-12 h-12 overflow-hidden border-2 ring-red-600 ring-2 m-1 rounded-full flex items-center justify-center">
           {
             !user?.photoURL ? <FaUser className="text-white text-xl"/>:<img src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
           }
           
          </div>
      </button>

      {/* <!-- Dropdown menu --> */}
      {isClicked && (
        <div
          className="absolute left-0 lg:left-auto lg:right-0 z-20 w-60 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
        >
          <Link
            to="/"
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              className="flex-shrink-0 ring-2 border-2 ring-red-600 object-cover mx-1 rounded-full w-9 h-9"
              src={user?.photoURL}
              alt="img"
            />
            <div className="ml-2">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {user?.displayName}
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-none">
               {user?.email}
              </p>
            </div>
          </Link>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <Link
            to="/Dashboard"
            className="flex items-center p-3 gap-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
          <MdOutlineDashboardCustomize className="text-lg mx-1" />

            <span className="mx-1">Dashboard</span>
          </Link>
          <Link
            to="/comming-soon"
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                fill="currentColor"
              ></path>
              <path
                d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-1">view profile</span>
          </Link>


          <hr className="border-gray-200 dark:border-gray-700 " />

          <p onClick={handleLogOut}
            className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 hover:cursor-pointer transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                fill="currentColor"
              ></path>
            </svg>

            <span className="mx-1">Sign Out</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
