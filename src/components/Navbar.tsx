"use client";

import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const openSans = Open_Sans({
    variable: "--open-sans",
  })

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#fff] shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className={` ${openSans.className} text-2xl font-bold text-yellow-500`}>SunSpark</h1>
                <div className="hidden md:flex space-x-6 text-[#101828]">
                    <Link href="/">Home</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                <div className="md:hidden text-[#101828]">
                    <button onClick={toggleMenu} className="text-[#101828] focus:outline-none">
                        <BiMenuAltRight size={30} />
                    </button>
                </div>
            </div>

            {isOpen && (
                    <div className="md:hidden fixed inset-0 bg-[#000]/50 z-10" onClick={toggleMenu}></div>
            )}
                    <div 
                      className={`md:hidden fixed inset-y-0 right-0 w-64 z-20 border-2 bg-[#fff] shadow-lg
                        transform transition-transform duration-300
                        ${isOpen ? "translate-x-0" : "translate-x-full"}
                        `}
                    >
                        <div className="flex justify-between px-2 py-4">
                            <h1 className={` ${openSans.className} text-2xl font-bold text-yellow-500`}>SunSpark</h1>
                            <button
                            onClick={toggleMenu}
                            className="text-[#000] mb-4 flex items-center justify-end cursor-pointer"
                            >
                                <BiX size={30} />
                            </button>
                        </div>
                        <Link href="/" className="block px-6 py-2 text-[#101828] cursor-pointer">
                            Home
                        </Link>
                        <Link href="/" className="block px-6 py-2 text-[#101828] cursor-pointer">
                            Services
                        </Link>
                        <Link href="/" className="block px-6 py-2 text-[#101828] cursor-pointer">
                            Contact
                        </Link>
                    </div>
        </nav>
    );
};

export default Navbar;