import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r to-gray-100 bg-blue-300 shadow-sm ">
      <div className="navbar  w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">FireBase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'} className="text-lg font-bold ">Home</Link>
            </li>
            <li>
              <details>
                <summary className="text-lg font-bold ">Service</summary>
                <ul className="p-2">
                  <li>
                  <Link to={'*'} className="text-lg font-bold ">Service 1</Link>
                  </li>
                  <li>
                  <Link to={'*'} className="text-lg font-bold ">Service 1</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
            <Link to={'*'} className="text-lg font-bold ">Home</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-green-400  text-xl">Login</a>
        </div>
      </div>
    </nav>
  );
};
