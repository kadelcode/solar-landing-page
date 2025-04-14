"use client";

import { motion } from "framer-motion";
import { ClipboardList, PhoneCall, Wrench, ShieldCheck } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        title: '1. Free Consultation',
        desc: 'Schedule a call with our team to assess your energy needs and budget.',
        icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    },
    {
        title: '2. Site Evaluation',
        desc: 'Our experts visit your location for a complete solar feasibility study.',
        icon: <ClipboardList className="w-8 h-8 text-green-600" />,
    },
    {
        title: '3. Custom Installation',
        desc: 'We design and install a tailored solar system using top-tier equipment.',
        icon: <Wrench className="w-8 h-8 text-yellow-600" />,
    },
    {
        title: '4. Activation & Support',
        desc: 'After setup, we activate your system and provide long-term maintenance.',
        icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                  className="text-3xl sm:text-4xl text-gray-900 font-bold mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    How It Works
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                    Going solar is simple with our streamlined 4-step process.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl p-6 shadow hover:shadow-md"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                {step.icon}
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h4>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                        <Link
                          href="/contact"
                          className="inline-block mt-12 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl shadow transition"
                        >
                            Book a Free Consultation
                        </Link>
                </motion.div>
            </div>
        </section>
    )
}