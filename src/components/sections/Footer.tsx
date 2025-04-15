"use client";

import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-2xl font-bold text-yellow-500">SunSpark</h2>
                    <p className="text-sm mt-2 text-gray-400">
                        Powering homes and businesses with clean, renewable energy.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                    <ul className="text-sm space-y-2">
                        <li><Link href="#whysolar">Why Solar?</Link></li>
                        <li><Link href="#services">Services</Link></li>
                        <li><Link href="#testimonials">Testimonials</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                    <p className="text-sm">123 Solar Ave, Sunshine city</p>
                    <p className="text-sm">Phone: <a href="tel:+123456789">+1 234 567 890</a></p>
                    <p className="text-sm">Email: <a href="mailto:info@sunspark.com">info@sunspark.com</a></p>
                </div>

                {/* Social Icons */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank"><FaFacebook size={20} /></a>
                        <a href="https://linkedin.com" target="_blank"><FaLinkedin size={20} /></a>
                        <a href="https://twitter.com" target="_blank"><FaTwitter size={20} /></a>
                        <a href="https://youtube.com" target="_blank"><FaYoutube size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} SunSpark. All rights reserved.
            </div>
        </footer>
    )
}