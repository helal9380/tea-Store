/** @format */

import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  const links = (
    <>
      <li>
        <Link className={({isActive}) => isActive ? 'text-white bg-white' : 'text-white font-semibold'} to={'/'}>Home</Link>
      </li>
      <li>
        <Link className={({isActive}) => isActive ? 'text-white bg-white' : 'text-white font-semibold'}  to={'/service'}>Service</Link>
      </li>
      <li>
        <Link className={({isActive}) => isActive ? 'text-white bg-white' : 'text-white font-semibold'}  to={'/addTea'}>Add Tea</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#331A15]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <h2 className="text-4xl text-white font-semibold ">Tea <span className="text-[#ad796e]">Store</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
