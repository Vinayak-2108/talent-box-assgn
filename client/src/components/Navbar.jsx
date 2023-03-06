import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
    // <div className="search">
    //             <div><img src={search} alt="" className=""/></div>
    //             <input
    //                 type="text"
    //                 className="hidden md:block bg-[#3C3C50]"
    //                 placeholder={` Search 9,000+ tutorials`}
    //             />
    //             </div>
    return (
        <nav className="bg-[#0A0A23] w-full absolute">
            <div className="flex items-center justify-between w-100 h-10">
                <form className="hidden md:block items-center search">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-[#D0D0D5] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search 9,000+ tutorials"
                            required
                        />
                    </div>
                </form>

                {/* <h1 className="text-white logo text-2xl">freeCodeCamp</h1> */}
                {/* <img src={logo} alt="" className="logo"/> */}
                <Link to="/"><img src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" className="logo" alt="freeCodeCamp.org"/></Link>
                
                <div className="p-1 w-1/3 flex justify-end gap-2 mr-2 ">
                    <button className="text-white border-white border p-1 navbtn">
                        Menu
                    </button>
                    <button className="bg-[#FEC143] border-2 border-[#ffaf10] tracking-wider navbtn">
                        <Link to="/signup">Sign in</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

{
    /* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-10">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <form className="flex items-center">
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg
                                                aria-hidden="true"
                                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            id="simple-search"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Search 9,000+ tutorials"
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <button className="text-white border-white border p-1">Menu</button>
                            <button className="bg-[#FEC143] p-1">Sign In</button>
                        </div>
                    </div>
                </div>
            </div> */
}
