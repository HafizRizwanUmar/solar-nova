import React from 'react';
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">

                {/* Brand */}
                <div className="footer-brand">
                    <Link to="/" className="nav-logo">
                        <Sun className="nav-logo-icon" />
                        <span>Solar<span className="text-yellow-400">Nova</span></span>
                    </Link>
                    <p>
                        Empowering the world with sustainable energy solutions. Join the green revolution today.
                    </p>
                    <div className="footer-socials">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="social-link">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links-list">
                        {['Home', 'Products', 'Solutions', 'About Us', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="footer-link">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li className="contact-item">
                            <MapPin className="contact-icon" />
                            <span>123 Solar Street, <br />Energy City, EC 90210</span>
                        </li>
                        <li className="contact-item">
                            <Phone className="contact-icon" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="contact-item">
                            <Mail className="contact-icon" />
                            <span>hello@solarnova.com</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p className="newsletter-text">Subscribe to get special offers and solar energy tips.</p>
                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="newsletter-input"
                        />
                        <button className="btn btn-primary w-full">Subscribe</button>
                    </form>
                </div>

            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} SolarNova Energy Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
