"use client";

import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
    '/images/solar1.jpeg',
    '/images/solar2.jpeg',
    '/images/solar3.jpeg',
    '/images/solar4.jpeg',
    '/images/solar5.jpeg',
    '/images/solar6.jpeg',
];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <section className="py-20 bg-white px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                  className="text-4xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Our Solar Projects
                </motion.h2>
                <p className='text-gray-600 mb-10'>See our latest intallations across the country.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <motion.div
                          key={src}
                          whileHover={{ scale: 1.03 }}
                          className='cursor-pointer overflow-hidden rounded-lg shadow'
                          onClick={() => {
                            setIndex(i);
                            setOpen(true);
                          }}
                        >
                            <Image
                              src={src}
                              alt={`Solar project ${i + 1}`}
                              width={400}
                              height={300}
                              className='object-cover w-full h-full'
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox viewer */}
                <Lightbox
                  open={open}
                  index={index}
                  close={() => setOpen(false)}
                  slides={images.map((src) => ({ src }))}
                />
            </div>
        </section>
    )
}