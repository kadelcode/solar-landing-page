"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun } from 'lucide-react';

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 3000); // Hide after 3s
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                  className='fixed inset-0 z-50 flex items-center justify-center bg-white'
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear'}}
                    >
                        <Sun className='w-16 h-16 text-yellow-500' />
                    </motion.div>
                    <h1 className='text-3xl font-bold mt-4 text-yellow-500'>SunSpark</h1>
                </motion.div>
            )}
        </AnimatePresence>
    )
}