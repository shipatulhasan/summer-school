import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import brand from "../../../assets/brand/logo-png1.png";
import Loader from "../../../components/Spinner/Loader";
import { AuthContext } from "../../../contexts/AuthProvider";
import UserProfile from "./UserProfile";
import toast from 'react-hot-toast'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, isLoading,logOut } = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{ 
      toast.success('Successfully logout')
    })
    .catch(err=>console.error(err.message))
  }

  const menuList = (

    <>
      <NavLink to="/Home">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "text-red-600" : "text-black"
            } hover:bg-red-300 hover:text-black px-2 rounded transition-colors duration-150 ease-linear font-bold list-none`}
          >
            Home
          </li>
        )}
      </NavLink>
      <NavLink to="/blog">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "text-red-600" : "text-black"
            } hover:bg-red-300 hover:text-black px-2 rounded transition-colors duration-150 ease-linear font-bold list-none`}
          >
            Blog
          </li>
        )}
      </NavLink>

      {!user ?  <NavLink to="/login">
          {({ isActive }) => (
            <li
            className={`${
              isActive ? "text-red-600" : "text-black"
            } hover:bg-red-300 hover:text-black px-2 rounded transition-colors duration-150 ease-linear font-bold list-none`}
            >
              Login
            </li>
          )}
        </NavLink> 
        :
        <>
          <NavLink to="/dashboard">
          {({ isActive }) => (
            <li
            className={`${
              isActive ? "text-red-600" : "text-black"
            } hover:bg-red-300 hover:text-black px-2 rounded transition-colors duration-150 ease-linear font-bold list-none`}
            >
              Dashboard
            </li>
          )}
        </NavLink> 
          <NavLink onClick={handleLogOut} >
          
            <li
            className={` text-black
            hover:bg-red-300 hover:text-black px-2 rounded transition-colors duration-150 ease-linear font-bold list-none`}
            >
              Logout
            </li>
     
        </NavLink> 
        </>
         }
    </>
  );

  return (
    <nav className=" z-10 w-full  dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto rounded">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link
                className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/"
              >
                <img className="w-16 md:w-24" src={brand} alt="" />
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setOpen(!isOpen)}
                type="button"
                className="text-red-400 text-xl dark:text-gray-200 hover:text-red-600 dark:hover:text-gray-400 focus:outline-none focus:text-red-600 dark:focus:text-slate-200"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center gap-4`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {menuList}
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              {user && (
                <div className="flex items-center -ml-1 lg:ml-0">
                  {isLoading ? <Loader height={'min-h-5'} />:<UserProfile />}
                  <h3 className="mx-2 text-white dark:text-gray-200 lg:hidden">
                    {user?.displayName}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
