"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { openSans } from "@/lib/fonts";


const Navbar = () => {
    // State to manage the open/close state of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the mobile menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#fff] fixed w-full shadow-md py-4 z-40">
            <div className="container mx-auto flex justify-between items-center px-3">
                {/* Logo or Brand Name */}
                <Link href="/" className={`${openSans.className} text-2xl font-bold text-yellow-500`}>
                   <FaBoltLightning size={30} className="text-yellow-400 inline"/>
                    SunSpark
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6 text-[#101828]">
                    <Link href="#whysolar">Why Solar?</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#testimonials">Testimonials</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-[#101828]">
                    <button onClick={toggleMenu} className="text-[#101828] focus:outline-none cursor-pointer">
                        {/* AltRight Hamburger Icon */}
                        <BiMenuAltRight size={30} />
                    </button>
                </div>
            </div>

            {/* Overlay for Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-black/50 opacity-50 z-10" 
                  onClick={toggleMenu}
                ></div>
            )}

            {/* Mobile Menu */}
            <div 
                className={`md:hidden fixed inset-y-0 right-0 w-64 z-20 border-2 bg-[#fff] shadow-lg
                transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="flex justify-between px-3 py-4">
                    {/* Logo */}
                    <FaBoltLightning size={30} className="text-yellow-400 inline"/>
                    {/*<h1 className={` ${openSans.className} text-2xl font-bold text-yellow-500`}>SunSpark</h1>*/}
                    
                    {/* Cancel Button for Mobile Menu */}
                    <button
                      onClick={toggleMenu}
                      className="text-[#000] mb-4 flex items-center justify-end cursor-pointer"
                    >
                        <BiX size={30} />
                    </button>
                </div>
                <Link href="#whysolar" onClick={() => setIsOpen(false)} className="block mx-6 my-2 text-[#101828] cursor-pointer w-auto">
                    Why Solar?
                </Link>
                <Link href="#services" onClick={() => setIsOpen(false)} className="block mx-6 my-2 text-[#101828] cursor-pointer">
                    Services
                </Link>
                <Link href="#testimonials" onClick={() => setIsOpen(false)} className="block mx-6 my-2 text-[#101828] cursor-pointer">
                    Testimonials
                </Link>
                <Link href="#contact" onClick={() => setIsOpen(false)} className="block mx-6 my-2 text-[#101828] cursor-pointer">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;