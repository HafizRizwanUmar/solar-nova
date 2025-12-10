import React from 'react';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0b1120] text-gray-400 py-16 border-t border-gray-800">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-heading text-white">
                        <Sun className="text-yellow-400 w-8 h-8" />
                        <span>Solar<span className="text-yellow-400">Nova</span></span>
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Empowering the world with sustainable energy solutions. Join the green revolution today.
                    </p>
                    <div className="flex gap-4 pt-2">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="hover:text-yellow-400 transition-colors">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-heading font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'Products', 'Solutions', 'About Us', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-heading font-bold mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                            <span>123 Solar Street, <br />Energy City, EC 90210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                            <span>hello@solarnova.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-heading font-bold mb-6">Newsletter</h3>
                    <p className="text-sm mb-4">Subscribe to get special offers and solar energy tips.</p>
                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors"
                        />
                        <button className="w-full btn btn-primary">Subscribe</button>
                    </form>
                </div>

            </div>

            <div className="container mt-16 pt-8 border-t border-gray-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} SolarNova Energy Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
