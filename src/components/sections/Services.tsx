"use client";

import React from 'react';
import { FaSolarPanel, FaBuilding, FaBatteryFull } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const services = [
    { 
        title: "Residential Solar", 
        desc: "Power your home with clean energy." ,
        icon: <FaSolarPanel className='text-4xl mb-2 text-green-500' />
    },
    { 
        title: "Commercial Solar", 
        desc: "Reduce business energy costs.",
        icon: <FaBuilding className='text-4xl mb-2 text-blue-500' />
    },

    { 
        title: "Solar Battery Storage", 
        desc: "Store energy for nighttime use.",
        icon: <FaBatteryFull className='text-4xl mb-2 text-yellow-500' />
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 px-4 bg-gray-100">
            <div className="container mx-auto text-center">
                <motion.h2 
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: .6 }}
                >
                    Our Services
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                    Our power solutions.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                          key={index} 
                          className="bg-white p-6 rounded-lg shadow-md"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                {service.icon}
                            </div>
                            
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-gray-800">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;