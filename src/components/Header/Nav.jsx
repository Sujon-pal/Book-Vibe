import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const links = (
    <>
      <li className="px-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
      </li>

      <li  className="px-5">
        <NavLink
          to="/listedBooks"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Listed Books
        </NavLink>
      </li>

      <li  className="px-5">
        <NavLink
          to="/pageRead"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mt-5 shadow-sm navbar bg-base-100 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">Book Vibe</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <button className="btn bg-green-500 text-white hover:bg-green-600 border-none">
          Sign In
        </button>

        <button className="btn bg-cyan-400 text-white hover:bg-cyan-500 border-none">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
