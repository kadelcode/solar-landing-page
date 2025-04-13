"use client";

import { motion } from "framer-motion";
import { Leaf, DollarSign, Sun, Zap } from "lucide-react";


const benefits = [
    {
        icon: <Sun className="w-8 h-8 text-yellow-500" />,
        title: 'Clean & Renewable',
        desc: 'Harness the power of the sun - a renewable source that helps reduce your carbon footprint.'
    },
    {
        icon: <DollarSign className="w-8 h-8 text-green-500" />,
        title: 'Lower Electricity Bills',
        desc: 'Slash your monthly utility costs by generating your own power with solar panels.'
    },
    {
        icon: <Zap className="w-8 h-8 text-blue-500" />,
        title: 'Energy Independence',
        desc: 'Become less reliant on grid power and protect yourself from rising energy prices.'
    },
    {
        icon: <Leaf className="w-8 h-8 text-emerald-600" />,
        title: 'Eco-Friendly Investment',
        desc: 'Make a positive impact on the planet while adding value to your property.'
    },
];

export default function WhyChooseSolar() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                  className="text-3xl sm:text-4xl text-gray-900 font-bold mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Why Choose Solar?
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                    Discover the long-term benefits of switching to solar energy for your home or business.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.2 }}
                        
                        >
                            <div className="flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-xl text-gray-800 font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}