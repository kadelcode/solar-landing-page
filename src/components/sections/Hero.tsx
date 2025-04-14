"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="flex flex-col items-center bg-[#FFF] px-5 py-30 sm:py-40 justify-center text-[#000]">
            <div className="text-center space-y-6">
                <motion.h1 
                  className="text-4xl sm:text-5xl font-extrabold"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Power Your Future with <span className="text-sky-500">Solar Energy</span>
                </motion.h1>

                <motion.p 
                  className="text-lg"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Sustainable. Affordable. Efficient
                </motion.p>

                <motion.div 
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                    <Image
                      src="/images/solar-energy.jpeg"
                      alt="Solar Energy"
                      width={600}
                      height={600}
                      className="rounded-lg"
                      priority
                    />
                </motion.div>
                
                {/* CTA Button */}
                <motion.button 
                  className="px-6 py-3 bg-amber-600 text-[#fff] rounded-lg mt-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                    Get a Free Quote
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;