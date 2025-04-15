"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("Sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });                
            } else {
                const errorData = await response.json();
                if (response.status === 400) {
                    setStatus("Invalid input. Please check your details and try again.");
                } else if (response.status === 500) {
                    setStatus("Server error. Please try again later.");
                } else {
                    setStatus(`Failed to send message: ${errorData.message || "Unknow error"}`);
                }
            }
        } catch (error) {
            setStatus("Network error. Please check your connection and try again.");
        } finally {
            setIsSending(false);
        }
    }
    
    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto max-w-lg p-8 bg-white shadow-lg rounded-lg">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                    Contact Us
                </motion.h2>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md focus:outline-none"
                    />

                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md"
                    />
                    <button type="submit" disabled={isSending} className="w-full bg-primary text-white bg-yellow-500 hover:bg-yellow-600 transition p-3 rounded-md cursor-pointer">
                        {isSending ? 
                          <div className="flex justify-center items-center">
                            <Loader2 className="animate-spin" />
                          </div>
                           : 
                          "Send Message"
                        }
                    </button>
                </form>
                {status && <p className={`
                    text-center mt-4
                    ${isSending ? "text-gray-500" : status.includes("success") ? "text-green-500" : "text-red-500"}
                    text-green-500
                    `
                    }
                >
                    {status}
                </p>}
            </div>
        </section>
    );
}

export default ContactForm;