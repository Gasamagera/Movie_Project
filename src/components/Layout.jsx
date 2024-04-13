import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.svg";
import React, { useState, useEffect } from "react";
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex w-screen bg-black p-2">
        <nav className="py-3 flex justify-between w-full">
          <div className="flex items-center mb-2 ml-4">
            <img src={logo} alt="" />
            <h2 className="text-white mx-2 py-1 text-2xl">Movies Bazer</h2>
          </div>
          <div>
            <ul
              className={`hidden md:flex space-x-8 text-white ${
                isMenuOpen ? "hidden" : ""
              }`}
            >
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white">
                  Genre
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white">
                  News
                </Link>
              </li>

              <li>
                <Link to="#" className="text-white">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-white">
                  Search
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white">
                  Tv Shows
                </Link>
              </li>
              <li>
                <Link
                  to="login"
                  className="text-white border p-1 rounded-md hover:bg-white hover:text-blue-500"
                >
                  Login
                </Link>
              </li>
            </ul>
            <button className="md:hidden pr-5 text-white" onClick={toggleMenu}>
              {/* Add your mobile menu icon here */}
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        <div className={`md:hidden p-3 ${isMenuOpen ? "" : "hidden"}`}>
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-900" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/genre"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                Genre
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/tvshows"
                className="hover:text-gray-900"
                onClick={toggleMenu}
              >
                TV Shows
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
