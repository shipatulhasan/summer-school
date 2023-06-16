import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCloudPlusFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdReportGmailerrorred } from "react-icons/md";

export const studentMenu = (
  <NavLink to="/dashboard/my-orders">
    {({ isActive }) => (
      <li
        className={`${
          isActive ? "bg-[#EFCF4F] text-white" : "text-[#C25934]"
        } w-full hover:bg-[#EFCF4F] hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
      >
        <div className="flex gap-2 items-center">
          <AiOutlineShoppingCart className="" />
          <span className="">My orders</span>
        </div>
      </li>
    )}
  </NavLink>
);

export const instructorMenu = (
  <>
    <NavLink to="/dashboard/add-product">
      {({ isActive }) => (
        <li
          className={`${
            isActive ? "bg-[#EFCF4F] text-white" : "text-[#C25934]"
          } w-full hover:bg-[#EFCF4F] hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
        >
          <div className="flex gap-2 items-center">
            <BsFillCloudPlusFill className="" />
            <span className="">Add a Product</span>
          </div>
        </li>
      )}
    </NavLink>
    <NavLink to="/dashboard/manage-products">
      {({ isActive }) => (
        <li
          className={`${
            isActive ? "bg-[#EFCF4F] text-white" : "text-[#C25934]"
          } w-full hover:bg-[#EFCF4F] hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
        >
          <div className="flex gap-2 items-center">
            <AiOutlineShoppingCart className="" />
            <span className="">Manage Products</span>
          </div>
        </li>
      )}
    </NavLink>
    <NavLink to="/comming-soon">
      {({ isActive }) => (
        <li
          className={`${
            isActive ? "bg-[#EFCF4F] text-white" : "text-[#C25934]"
          } w-full hover:bg-[#EFCF4F] hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
        >
          <div className="flex gap-2 items-center">
            <HiUserGroup className="" />
            <span className="">My Buyers</span>
          </div>
        </li>
      )}
    </NavLink>
  </>
);
export const adminMenu = (
  <>
    <NavLink to="/dashboard/manage-users">
      {({ isActive }) => (
        <li
          className={`${
            isActive ? "bg-[#EFCF4F] text-white" : "text-[#C25934]"
          } w-full hover:bg-[#EFCF4F] hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
        >
          <div className="flex gap-2 items-center">
            <HiUserGroup className="" />
            <span className="">All users</span>
          </div>
        </li>
      )}
    </NavLink>
    <NavLink to="/dashboard/manage-classes">
      {({ isActive }) => (
        <li
          className={`${
            isActive ? "bg-[#EFCF4F] text-white" : "text-[#C25934]"
          } w-full hover:bg-[#EFCF4F] hover:text-white px-2 py-1 rounded transition-colors duration-150 ease-linear font-semibold list-none mb-2 capitalize`}
        >
          <div className="flex gap-2 items-center">
            <HiUserGroup className="" />
            <span className="">Manage Classes</span>
          </div>
        </li>
      )}
    </NavLink>
  </>
);
