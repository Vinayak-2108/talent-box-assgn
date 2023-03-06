import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import companies from "../assets/companies.jpg";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="h-full bg-[#F5F6F7] text-white flex flex-col items-center justify-center">
                <div className="w-4/6 flex flex-col mt-32">
                    <div className="text-[#1b1b32] hero-text pb-4">
                        Learn to code - for free.
                    </div>
                    <div className="text-[#1b1b32] hero-text pb-4">
                        Build projects
                    </div>
                    <div className="text-[#1b1b32] hero-text pb-4">
                        Earn certifications
                    </div>
                    <p className="text-[#1b1b32] sub-text">
                        Since 2014, more than 40,000 freeCodeCamp.org graduates
                        have gotten jobs at tech companies including:
                    </p>
                    <div className="companies">
                        <img src={companies} alt="" />
                    </div>
                    <button className="bg-[#FEC143] border-2 text-black border-[#ffaf10] tracking-wider cta-home">
                        <Link to="/signup">Get started (it's free)</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
