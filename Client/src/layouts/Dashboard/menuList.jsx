import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCloudPlusFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdReportGmailerrorred } from "react-icons/md";

export const userMenu = 

     <NavLink to="/dashboard/my-orders">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-red-500 text-white" : "text-black"
            } w-full hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
                  <div className="flex gap-2 items-center">
                  <AiOutlineShoppingCart className="" />
                            <span className='' >My orders</span>
                        </div>
            
          </li>
        )}
      </NavLink>

export const sellersMenu = <>
    <NavLink to="/dashboard/add-product">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-red-500 text-white" : "text-black"
            } w-full hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
                  <div className="flex gap-2 items-center">
                  <BsFillCloudPlusFill className="" />
                            <span className='' >Add a Product</span>
                        </div>
            
          </li>
        )}
      </NavLink>
    <NavLink to="/dashboard/manage-products">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-red-500 text-white" : "text-black"
            } w-full hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
                  <div className="flex gap-2 items-center">
                  <AiOutlineShoppingCart className="" />
                            <span className='' >Manage Products</span>
                        </div>
            
          </li>
        )}
      </NavLink>
    <NavLink to='/comming-soon'>
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-red-500 text-white" : "text-black"
            } w-full hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
                  <div className="flex gap-2 items-center">
                  <HiUserGroup className="" />
                            <span className='' >My Buyers</span>
                        </div>
            
          </li>
        )}
      </NavLink>

</>
export const adminMenu = <>
    <NavLink to="/dashboard/all-buyers">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-red-500 text-white" : "text-black"
            } w-full hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
                  <div className="flex gap-2 items-center">
                  <HiUserGroup className="" />
                            <span className=''>All buyers</span>
                        </div>
            
          </li>
        )}
      </NavLink>
    <NavLink to="/dashboard/all-sellers">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-red-500 text-white" : "text-black"
            } w-full hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
                  <div className="flex gap-2 items-center">
                  <HiUserGroup className=""/>
                            <span className='' >All sellers</span>
                        </div>
            
          </li>
        )}
      </NavLink>
    <NavLink to="/dashboard/reported-items">
        {({ isActive }) => (
          <li
            className={`${
              isActive ? "bg-red-500 text-white" : "text-black"
            } w-full hover:bg-red-500 hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
          >
                  <div className="flex gap-2 items-center">
                  <MdReportGmailerrorred className="" />
                            <span className='' >Reported Products</span>
                        </div>
            
          </li>
        )}
      </NavLink>

</>