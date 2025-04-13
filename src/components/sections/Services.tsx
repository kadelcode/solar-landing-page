"use client";

import React from 'react';
import { FaSolarPanel, FaBuilding, FaBatteryFull } from 'react-icons/fa6';

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
        <section id="services" className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                <div className="mt-6 flex px-3 flex-wrap justify-center mx-auto sm:space-x-4 md:space-x-8 space-y-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left w-72 h-48">
                            {service.icon}
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-gray-800">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;