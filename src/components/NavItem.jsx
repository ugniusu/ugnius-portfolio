import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group text-accent-100 font-medium text-lg flex gap-4 items-center px-6 py-2 rounded-md transition-colors ${
            isActive
              ? "bg-accent-900 text-accent-50"
              : "hover:text-accent-50 hover:bg-accent-900"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`text-accent-600 ${
                isActive ? "text-primary-500" : "group-hover:text-primary-500"
              }`}
            />
            {label}
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
