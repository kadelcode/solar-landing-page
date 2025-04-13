"use client";

import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "John Doe",
        review: "Switching to solar energy saved me 50% on electricity bills!",
        company: "Green Future Inc.",
    },
    {
        name: "Sarah Smith",
        review: "The best solar panel installation service. Highly recommend!",
        company: "Eco Power Solutions",
    },
    {
        name: "Michael Brown",
        review: "Seamless experience and great support!",
        company: "SunTech Energy",
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <motion.h2 
                  className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    What Our Customers Say
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-white p-6 rounded-lg shadow-md w-80"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}

                        >
                            <FaQuoteLeft className="text-primary text-2xl mb-3" />
                            <p className="text-gray-700 italic">{t.review}</p>
                            <h4 className="font-bold mt-4 text-sky-500">{t.name}</h4>
                            <p className="text-sm text-gray-500">{t.company}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;