import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menus = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addCampaign">Add Campaign</NavLink>
      <NavLink to="/allCampaign">All Campaigns</NavLink>
      <NavLink to="/myCampaign">My Campaigns</NavLink>
      <NavLink to="/myDonations">My Donations</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm space-x-5 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menus}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-60" src={logoo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 px-1">{menus}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        {user ? (
          <div className="flex items-center gap-3">
           
            <div className="flex items-center gap-2 relative">
              <img
                className="w-10 h-10 rounded-full "
                src={user.photoURL}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                alt="User"
              />
              {/* Hover Effect */}
              <div
                className={`absolute top-10 right-0  mt-2 w-48 bg-white shadow-lg rounded-lg p-4 transition-opacity duration-300 ${
                  hover ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <p className="text-gray-700 font-semibold">{user.displayName}</p>
                <button onClick={handleLogOut} className="mt-2 w-full bg-green-300 text-white py-1 px-3 rounded-lg hover:bg-red-600">
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <Link to="/signUp" className="btn">
              Register
            </Link>
            <Link to="/signIn" className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
