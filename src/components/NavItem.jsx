import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `group text-accent-100 font-medium text-lg flex gap-4 items-center px-4 py-2 rounded-md transition-colors ${
            isActive ? "text-accent-50" : "text-accent-50"
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
            <span className="text-sm lg:text-lg hidden md:inline">{label}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
