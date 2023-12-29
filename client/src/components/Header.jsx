import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between item-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/">
            <span className="text-slate-500">vineeth</span>
            <span className="text-slate-700">Estate</span>
          </Link>
        </h1>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          ></input>
          <FaSearch className="text-slate-600"></FaSearch>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-slate-700 hover:underline hidden sm:inline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:underline hidden sm:inline">
              About
            </li>
          </Link>
          <Link to="/sinin">
            <li className="text-slate-700 hover:underline">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
