import React from "react";
import { NavLink } from "react-router-dom";

const CategorySidebar = ({ cat, lastItem }) => {
  const { name, _id } = cat;
  return (
    <NavLink to={`/category/${_id}`} state={cat}>
      {({ isActive }) => (
        <li
          className={`${
            isActive ? "bg-[#EFCF4F] text-white" : "text-black"
          } w-full hover:bg-[#EFCF4F] text-lg hover:text-white py-4 transition-colors duration-150 ease-linear font-semibold list-none  px-5 ${
            lastItem ? "border-b-0" : "border-b border-[#EFCF4F]"
          } uppercase tracking-wide`}
        >
          {name}
        </li>
      )}
    </NavLink>
  );
};

export default CategorySidebar;
