import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thanks for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-grid">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="contact-info-label">Get in touch</span>
                        <h1 className="contact-title">
                            Let's Start Your <br /> <span className="text-gradient">Solar Journey</span>
                        </h1>
                        <p className="contact-description">
                            Have questions about installation, pricing, or compatibility?
                            Our team of solar experts is ready to help you find the perfect solution for your energy needs.
                        </p>

                        <div className="contact-methods">
                            {[
                                { icon: Phone, text: "+1 (555) 123-4567", label: "Call us Mon-Fri, 9am-6pm" },
                                { icon: Mail, text: "hello@solarnova.com", label: "Email us anytime" },
                                { icon: MapPin, text: "123 Solar Street, Energy City", label: "Visit our showroom" },
                            ].map((item, i) => (
                                <div key={i} className="contact-method-item">
                                    <div className="contact-method-icon-wrapper">
                                        <item.icon className="contact-method-icon" />
                                    </div>
                                    <div>
                                        <h3 className="contact-method-text">{item.text}</h3>
                                        <p className="contact-method-label">{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="contact-form-container"
                    >
                        <h2 className="contact-form-title">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    className="form-input"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="form-input"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    required
                                    className="form-textarea"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
