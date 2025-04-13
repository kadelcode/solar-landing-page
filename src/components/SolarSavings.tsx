"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SolarSavings = () => {
    const [bill, setBill] = useState(100);
    const estimatedSavings = bill * 0.75;


    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center text-gray-800">
                <motion.h3 
                className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                    Estimate Your Solar Savings
                </motion.h3>

                <motion.div 
                className="p-6 bg-white rounded shadow-md max-w-md mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                    <input
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full p-2 border border-yellow-500 rounded mb-4 focus:border-sky-500 focus:outline-none"
                    placeholder="Monthly Electricity Bill ($)"
                    />

                    <p className="text-lg">
                        You could save approximately <span className="font-bold text-green-600">${estimatedSavings.toFixed(2)}</span> per month.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default SolarSavings;